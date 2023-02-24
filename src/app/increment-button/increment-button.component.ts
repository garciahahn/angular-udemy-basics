import { Component } from '@angular/core';

@Component({
  selector: 'app-increment-button',
  templateUrl: './increment-button.component.html',
  styleUrls: ['./increment-button.component.css'],
})
export class IncrementButtonComponent {
  BUTTON_MSG_DISPLAY: string = 'Show secret paragraph!';
  BUTTON_MSG_HIDE: string = 'Shhhh... hide the paragraph 🤫';
  buttonDisplay: string = this.BUTTON_MSG_DISPLAY;
  paragraphDisplayed: boolean = false;
  toggleCounter: number = 0;
  toggleArray: Array<Date> = [];

  onButtonClick() {
    this.paragraphDisplayed = !this.paragraphDisplayed;
    this.toggleCounter++;
    this.toggleArray.push(new Date())
  }

  getBackgroundColor(index) {
    return index.length > 3 ? 'dodgerblue' : 'white'
  }

  getClass(index) {
    return index.length > 3
  }

  getDisplayText() {
    if(this.paragraphDisplayed){
      return this.BUTTON_MSG_HIDE
    } else {
      return this.BUTTON_MSG_DISPLAY
    }
  }
}
