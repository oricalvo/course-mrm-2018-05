import {Component, ElementRef, Inject, PLATFORM_ID, PlatformRef, ViewEncapsulation} from '@angular/core';
import {element} from 'protractor';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  constructor(elementRef: ElementRef, platform: PlatformRef, @Inject(PLATFORM_ID) platformId) {
    console.log("element", elementRef.nativeElement);
    console.log("platform", platform);
    console.log("platformId", platformId);

    if(isPlatformBrowser(platformId)) {
      const domElement: HTMLElement = elementRef.nativeElement;
      domElement.classList.add("panel");
    }
  }
}
