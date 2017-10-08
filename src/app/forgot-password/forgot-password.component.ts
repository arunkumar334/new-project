import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  results:object;
  submit:boolean;
  authMsg:boolean;
  successMsg:boolean;
  forgot_form:FormGroup;
  constructor(private fb:FormBuilder,private http: HttpClient,private router:Router) {
    this.forgot_form=this.fb.group({
      school:['', Validators.required],
      book:['', [Validators.required]],
      movie:['', [Validators.required]]
    });
  }

 onsubmit(){
console.log(this.forgot_form);
 }

 reset(){
this.forgot_form.reset();

 }

auth(){
   this.submit=false;
    if(this.results['school']==this.forgot_form.value.school && this.results['favBook']==this.forgot_form.value.book && this.results['favMovie']==this.forgot_form.value.movie){
      this.submit=true;
      this.authMsg=true;
      this.successMsg=false;
    }
    else{
      this.authMsg=false;
      this.successMsg=true;
    }
 }

 naventer(event){
   if(event.keyCode==13){  
     if(this.results['school']==this.forgot_form.value.school && this.results['favBook']==this.forgot_form.value.book && this.results['favMovie']==this.forgot_form.value.movie){
      this.router.navigateByUrl("/welcome");
     }
   }
 }

  ngOnInit() {
    this.submit=false;
      this.http.get('/assets/userData.json').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
    }
  );
  }

}
