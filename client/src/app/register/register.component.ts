import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister: any = new EventEmitter();
  model: any = {}

  constructor () { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.model);
  }
  
  cancel() {
    this.cancelRegister.emit(false);
  }
}
