import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [`
    html{
      margin:1rem;
    }
    input{
      width: 20%;
    }
  `]
})
export class UserComponent implements OnInit {
  userName = '';
  buttonDisabled = true;

  constructor() {
   }

  ngOnInit(): void {
  }

  onInputBlur(){
   if(this.userName.length > 0){
    this.buttonDisabled = false;
   }
  }

  onResetClick(){
    this.userName = '';
  }
  
 

}
