import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('cv', { static: true }) MyDOMElement: ElementRef;
  title = 'cvitae';

  constructor() {

  }
  printCv(cmpName: string): void {

    // let printContents = this.MyDOMElement;
    // let originalContents = document.body.innerHTML;

    // document.body.innerHTML = String(printContents);

    // window.print();

    // document.body.innerHTML = originalContents;

}
}
