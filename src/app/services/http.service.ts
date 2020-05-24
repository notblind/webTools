import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	private headers: HttpHeaders;

  constructor(private httpClient: HttpClient) { }

	public get(url: string): Promise<any>{
		this.headers = new HttpHeaders({});
		this.headers.set('Access-Control-Allow-Origin', '*');
		this.headers.set('Access-Control-Allow-Credentials', 'true');
		return this.httpClient.get(url, {headers: this.headers}).toPromise();
	}
}
