import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;
  users:any;
  constructor(private auth: AuthService, private router: Router) { 
    
  }

  ngOnInit(): void {
     this.form = new FormGroup({
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)])
     })
     this.getUsers()
  }

  getUsers(){
    this.auth.getUsers().subscribe(response =>{
      this.users = response;
      console.log(response);
   }, 
   error =>{
     console.log(error);
   })
  }

  submit() {
    
    if(this.form.invalid){
      return;
    }
    this.submitted = true;

    // create new object
    const user = {
      username: this.form.value.username,
      password: this.form.value.password
    }

    // Using service to auth user
    // in Angular services are using for 2 reasons: 
    // 1. Communicate with other components, service can hold some data in memory 
    // 2. Use service to communicate with server
    
    this.auth.login(user).subscribe(response => {
      console.log(response);
      this.form.reset
      this.router.navigate(['/admin', 'dashboard'])
      this.submitted = false
    },
    error => {
      console.log(error);
      this.submitted = false
    });
    
  }

}
