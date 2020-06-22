import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonText = 'Hide Paragraph';
  clickCount = 0;
  clicks = []

  changeButtonText(){
    this.clickCount+=1;
    this.clicks.push(this.clickCount);
    // console.log(this.clicks);
    if(this.buttonText === 'Hide Paragraph'){
      console.log("in ig")
      this.buttonText = 'Show Paragraph';
    }
    else if(this.buttonText === 'Show Paragraph'){
      console.log("in else")
      this.buttonText = 'Hide Parahraph';
    }
    //this.buttonText === 'Hide Paragraph' ? 'Show Paragraph' : 'Hide Paragraph';
    console.log(this.buttonText)
  }
}
