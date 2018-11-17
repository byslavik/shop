import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  titleElement: ElementRef;

  ngAfterViewInit() {
    (<HTMLInputElement>this.titleElement.nativeElement).innerText = 'My Test Shop'
  }
}
