import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { Router } from "@angular/router";
import {LoginService} from '../../service/login.service'
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.css']
})
export class LoginGoogleComponent implements OnInit {
  public user : SocialUser = new SocialUser;
  public users:User = new User();

  // domainAddress:any = '@turntabl.io'
  constructor(private auth : SocialAuthService, private route: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  SignInWithGoogle():void{
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userDetails)=>{
        this.user = userDetails;
        this.users.idToken = userDetails.idToken;
        this.users.email = userDetails.email;
        this.users.name = userDetails.name;
        this.loginService.userDetails(this.users).subscribe((response)=>{
          console.log(response)
        });
        console.log(userDetails)
      },error=>{
        console.log(error)
      })
  }


}
