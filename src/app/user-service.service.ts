import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _http:HttpClient) { }

  private _url= "https://dev-api.vajro.com/tasks/production";


  userData():any{

    return this._http.get(this._url);
  }
}
