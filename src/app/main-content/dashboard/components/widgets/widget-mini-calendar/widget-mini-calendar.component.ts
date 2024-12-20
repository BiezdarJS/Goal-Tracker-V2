import { ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild, WritableSignal } from '@angular/core';
// Day.js
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { ICalendarDays } from './interfaces/calendar-days.interface';
dayjs.extend(weekday);
dayjs.extend(weekOfYear);
/** Komponent widgetu MiniCalendar w Dashboard */
@Component({
  selector: 'gt-widget-mini-calendar',
  standalone: true,
  imports: [],
  templateUrl: './widget-mini-calendar.component.html',
  styleUrl: './widget-mini-calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetMiniCalendarComponent {
  /** Referencja do widgetu kalendarza z HTML */
  @ViewChild('calendarDaysElement') calendarDaysElement!: ElementRef<HTMLOListElement>;

  /** Dostępne dni tygodnia */
  public WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  /** Dzień dzisiejszy w formacie YYYY-MM-DD */
  private TODAY = dayjs().format("YYYY-MM-DD");
  /** Bieżący rok wyświetlany przy pierwszym wyświetleniu widgetu */
  private INITIAL_YEAR!:number;
  /** Bieżący miesiąc wyświetlany przy pierwszym wyświetleniu widgetu */
  private INITIAL_MONTH!:number;
  /** Miesiąc i rok wyświetlany w headerze widgetu */
  public headerMonthAndYear: WritableSignal<string> = signal('');
  /** Obecnie wybrany miesiąc */
  private selectedMonth!:dayjs.Dayjs;
  /** Dni z poprzedniego miesiąca w kalendarzu */
  private previousMonthDays!: ICalendarDays[];
  /** Dni z następnego miesiąca w kalendarzu */
  private nextMonthDays!: ICalendarDays[];
  /** Dni z obecnie wybranego miesiąca w kalendarzu */
  private currentMonthDays!: ICalendarDays[];

  /** OnInit */
  ngOnInit():void {
    this.INITIAL_YEAR = parseInt(dayjs().format("YYYY"), 10);
    this.INITIAL_MONTH = parseInt(dayjs().format("M"));
    this.selectedMonth = dayjs(new Date(this.INITIAL_YEAR, this.INITIAL_MONTH - 1, 1));
  }

  /** AfterViewInit */
  ngAfterViewInit() {
    this.createCalendar();
  }

  /** Główna metoda generująca kalendarz */
  private createCalendar(year = this.INITIAL_YEAR, month = this.INITIAL_MONTH): void {
    // set header Month and Year
    this.headerMonthAndYear.set(dayjs(new Date(year, month - 1)).format("MMMM YYYY"));
    // If exist, remove all Days
    const calendarDaysElement = this.calendarDaysElement.nativeElement;
    this.removeAllDayElements(calendarDaysElement);
    // Create Days
    this.currentMonthDays = this.createDaysForCurrentMonth(year,month);
    this.previousMonthDays = this.createDaysForPreviousMonth(year, month);
    this.nextMonthDays = this.createDaysForNextMonth(year, month);
    // Collect all Days
    const days = [...this.previousMonthDays, ...this.currentMonthDays, ...this.nextMonthDays];
    // Append All Days
    days.forEach(day => {
      this.appendDay(day, this.calendarDaysElement);
    });
  }

  /** Tworzy kalendarz po naciśnięciu strzałki 'następny' w headerze */
  public prevMonthSelector(): void {
    this.selectedMonth = dayjs(this.selectedMonth).subtract(1, "month");
    this.createCalendar(parseInt(this.selectedMonth.format("YYYY"),10), parseInt(this.selectedMonth.format("M"),10));
  }

  /** Tworzy kalendarz po naciśnięciu 'Today' w headerze */
  public presentMonthSelector(): void {
    this.selectedMonth = dayjs(new Date(this.INITIAL_YEAR, this.INITIAL_MONTH - 1, 1));
    this.createCalendar(parseInt(this.selectedMonth.format("YYYY"),10), parseInt(this.selectedMonth.format("M"),10));
  }

  /** Tworzy kalendarz po naciśnięciu strzałki 'poprzedni' w headerze */
  public nextMontSelector(): void {
    this.selectedMonth = dayjs(this.selectedMonth).add(1, "month");
    this.createCalendar(parseInt(this.selectedMonth.format("YYYY"),10), parseInt(this.selectedMonth.format("M"),10));
  }

  /** Generuje dni dla obecnie wybranego miesiąca */
  private createDaysForCurrentMonth(year:number, month:number): ICalendarDays[] {
    return [...Array(this.getNumberOfDaysInMonth(year, month))].map((day, index) => {
      const currentMonthDays: ICalendarDays = {
        date: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: true
      }
      return currentMonthDays;
    });
  }

  /** Generuje dni dla poprzedniego miesiąca */
  private createDaysForPreviousMonth(year:number, month:number): ICalendarDays[] {

    const firstDayOfTheMonthWeekday = this.getWeekday(this.currentMonthDays[0].date);
    const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");

    // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
    const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
      ? firstDayOfTheMonthWeekday - 1
      : 6;

    const previousMonthLastMondayDayOfMonth = dayjs(this.currentMonthDays[0].date)
      .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
      .date();

    return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
      const previousMonthDays: ICalendarDays = {
        date: dayjs(
          `${previousMonth.year()}-${previousMonth.month() + 1}-${
            previousMonthLastMondayDayOfMonth + index}`).format("YYYY-MM-DD"),
        dayOfMonth: previousMonthLastMondayDayOfMonth + index,
        isCurrentMonth: false
      }
      return previousMonthDays;
    });
  }

  /** Generuje dni dla następnego miesiąca */
  private createDaysForNextMonth(year:number, month:number): ICalendarDays[] {
    const lastDayOfTheMonthWeekday = this.getWeekday(
      `${year}-${month}-${this.currentMonthDays.length}`
    );

    const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");

    const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
      ? 7 - lastDayOfTheMonthWeekday
      : lastDayOfTheMonthWeekday;

    return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
      const nextMonthDays: ICalendarDays = {
        date: dayjs(
          `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
        ).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: false
      }
      return nextMonthDays;
    });
  }

  /** Dodaje pojedynczy dzień */
  private appendDay(day:ICalendarDays, calendarDaysElement:ElementRef): void {
    const tasks = `
    <li class="task-item-sm task-item-sm--self-knowledge">
    </li>
    <li class="task-item-sm task-item-sm--career">
    </li>
    `;
    const dayElement = document.createElement("li");
    const dayElementClassList = dayElement.classList;
    dayElementClassList.add("calendar-day");
    dayElementClassList.add("calendar-day--sm");
    const dayOfMonthElement = document.createElement("span");
    dayOfMonthElement.innerText = '' + day.dayOfMonth;
    dayElement.appendChild(dayOfMonthElement);
    const tasksListElement = document.createElement("ul");
    tasksListElement.classList.add('tasks-list', 'list', 'hstack', 'justify-content-center');
    tasksListElement.innerHTML = tasks;
    calendarDaysElement.nativeElement.appendChild(dayElement);
    if (day.dayOfMonth === 12) {
      dayElement.appendChild(tasksListElement);
    }
    if (!day.isCurrentMonth) {
      dayElementClassList.add("calendar-day--not-current");
    }

    if (day.date === this.TODAY) {
      dayElementClassList.add("calendar-day--today");
    }
  }


  /** Usuwa wszystkie dni w kalendarzu */
  private removeAllDayElements(calendarDaysElement:HTMLOListElement): void {
    let first = calendarDaysElement.firstElementChild;

    while (first) {
      first.remove();
      first = calendarDaysElement.firstElementChild;
    }
  }

  /** Pobiera obecny dzień tygodnia */
  private getWeekday(date:string): number {
    return dayjs(date).weekday();
  }

  /** Oblicza ilość dni w obecnie wybranym miesiącu */
  private getNumberOfDaysInMonth(year:number, month:number): number {
    return dayjs(`${year}-${month}-01`).daysInMonth();
  }
}
