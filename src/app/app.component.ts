import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mylocalstorage';
  data: string = '';

  myLoad() {
    var myContent = localStorage.getItem("myContent");
    this.data = myContent!;
  }

  mySave() {
    var myContent = this.data;
    localStorage.setItem("myContent", myContent);
  }
}
