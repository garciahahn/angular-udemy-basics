import { Component } from '@angular/core';

@Component({
  selector: 'app-input-assignment',
  templateUrl: './input-assignment.component.html',
  styleUrls: ['./input-assignment.component.css'],
})



export class InputAssignmentComponent {
  userName: string = '';
  canResetUserName: boolean = false;

  // onUpdateUserName() {
  //   console.log('something')
  //   if (this.userName === '') {
  //     this.canResetUserName = false;
  //   } else {
  //     this.canResetUserName = true;
  //   }
  // }

  onResetUserNameClick() {
    this.userName = '';
  }
}
