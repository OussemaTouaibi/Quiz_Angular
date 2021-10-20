import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swa1 from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private UserService:UserService, private snack : MatSnackBar) { }

  public user = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',

  };

  ngOnInit(): void {}

  formSubmit() {
  console.log(this.user);
  if(this.user.username=='' || this.user.username==null)
  {
    //alert('User is required !');
    this.snack.open('Username is required !! ', '', {
      duration:3000,
    });

    return;
  }

  //addUser: userservice
this.UserService.addUser(this.user).subscribe(
  (data: any) => {
    //success
    console.log(data);
    //alert('success');
    Swa1.fire('Successfully done !!', 'User id is ' + data.id, 'success');
  },
  (error) => {
    //error
    console.log(error);
    //alert('something went wrong');
    this.snack.open('somthing went wrong !!','',{
      duration:3000
    })
  }
);
  }

}
