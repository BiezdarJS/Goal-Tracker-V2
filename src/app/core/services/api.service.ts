import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
/**
   * Główny URL do API.
   * @private
   */
private readonly _mainUrl: string = environment.firebase.databaseURL;


/**
 * Konstruktor klasy
 * @param _http Serwis do operacji na żądaniach Http
 */
constructor(public readonly _http: HttpClient) {}

/**
 * Wysyła żądanie 'GET' do serwera
 * @param url Url to REST action
 */
public Get<T>(url: string, newApi: boolean = true): Observable<T> {
  return this._http.get<T>(this._mainUrl + url);
}


/**
 * Wysyła żądanie 'GET do serwera z możliwością sprecyzowania opcji.
 */
public RawGet<T>(originUrl: string, options?: any): Observable<T> {
  const url = this.addPrefixUrl(originUrl);
  if (!options) {
    return this._http.get<T>(url);
  } else {
    // @ts-ignore
    return this._http.get<T>(url, options);
  }
}

/**
 * Wysyła żądanie 'POST' do serwera
 * @param url Url to REST action
 * @param body Post body
 * @param newApi Opcjonalna flaga do korzystania ze starego api ( api/v2 vs api)
 */
public Post<T>(url: string, body?: any, newApi: boolean = true): Observable<T> {
  const urlPrefix = this._mainUrl;
  console.log('JSON.stringify: ', JSON.stringify(body));
  return this._http.post<T>(urlPrefix + url, body != null ? body : null);
}

/**
 * Sends POST to REST Server
 * @param url Url to REST action
 * @param body Post body
 */
public RawPost<T>(url: string, body?: any): Observable<T> {
  url = this.addPrefixUrl(url);
  return this._http.post<T>(url, body != null ? JSON.stringify(body) : null);
}

/**
 * Wysyła żądanie 'DELETE' do serwera
 * @param url Url to REST action
 */
public Delete<T>(url: string): Observable<T> {
  return this._http.delete<T>(this._mainUrl + url);
}

/**
 * Wysyła żądanie 'PUT' do serwera.
 */
public Put<T>(url: string, body: any = null): Observable<T> {
  return this._http.put<T>(this._mainUrl + url, body);
}

/**
 * Wysyła żądanie wgrywania pliku.
 */
public UploadFile<T>(url: string, body: FormData): Observable<T> {
  return this._http.post<T>(this._mainUrl + url, body);
}

/**
 * Wysyłanie żadania wgrywania pliku z informacją o postępie.
 */
public UploadFileWithProgress(url: string, body: FormData): Observable<HttpEvent<any>> {
  const req = new HttpRequest('POST', this._mainUrl + url, body, {
    reportProgress: true,
  });
  return this._http.request(req);
}

/**
 * Generyczna metoda wysyłania żadania do serwera w oparciu o paramtery.
 */
public RequestApi<T>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  body: any = null
): Observable<T> {
  switch (method) {
    case 'get':
      return this._http.get<T>(url);
    case 'post':
      return this._http.post<T>(url, body);
    case 'put':
      return this._http.put<T>(url, body);
    case 'delete':
      return this._http.delete<T>(url);
  }
}

/**
 * Dodawanie przedrostka do URL żądania.
 */
private addPrefixUrl(url: string): string {
  return url.indexOf('http') !== 0 ? this._mainUrl + url : url;
}
}
