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

  constructor() {
   }

  ngOnInit(): void {
  }  
 

}
