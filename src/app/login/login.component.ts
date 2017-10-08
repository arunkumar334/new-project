import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
results:object;
submit:boolean;
authMsg:boolean=true;
login_form:FormGroup;
  constructor(private fb:FormBuilder,private http: HttpClient,private router:Router) {
    this.login_form=this.fb.group({
      username:['', Validators.required],
      password:['', [Validators.required]]
    });
  }

 onsubmit(){
console.log(this.login_form);
 }

 reset(){
this.login_form.reset();

 }

 auth(){
   this.submit=false;
    if(this.results['username']==this.login_form.value.username && this.results['password']==this.login_form.value.password){
      this.submit=true;
      this.authMsg=true;
    }
    else{
      this.authMsg=false;
    }
 }

 naventer(event){
   if(event.keyCode==13){  
     if(this.results['username']==this.login_form.value.username && this.results['password']==this.login_form.value.password){
      this.router.navigateByUrl("/welcome");
     }
   }
 }

  ngOnInit(): void {
    this.submit=false;
      this.http.get('/assets/userData.json').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      console.log(this.results);
    }
  );
  }
}
