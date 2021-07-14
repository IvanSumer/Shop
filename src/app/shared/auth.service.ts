import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any
  constructor(private http: HttpClient) { }

  login(User){
    return this.http.post('https://localhost:44306/api/Account/login', User)
     .pipe(
       tap(this.setToken)
     )
  }

  getUsers (){
   return this.http.get('https://localhost:44306/api/User')
  }

  private setToken(response){
    if(response){
      const expData =new Date(new Date().getTime() + 3200* 1000);
      localStorage.setItem('token-exp', expData.toString())
      localStorage.setItem('token', response.token)
    }
    else
    {
      localStorage.clear()
    }
  }

  get token (){
    const expDt = new Date(localStorage.getItem('token-exp'));
    
    if(new Date > expDt){
      this.logout()
      return null;
    }
    return localStorage.getItem('token')
  }

  logout(){
     this.setToken(null)
  }

  isAuthenticatd(){
    return !!this.token;
  }
}


