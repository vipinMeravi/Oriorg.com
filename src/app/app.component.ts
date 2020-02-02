import { Component, HostListener, ElementRef  } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'; // import Router and NavigationEnd
 declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oriorg';
  isShow: boolean;
  topPosToStartShowing = 100;

	constructor(public router: Router) {

		// subscribe to router events and send page views to Google Analytics
		this.router.events.subscribe(event => {

		if (event instanceof NavigationEnd) {
			ga('set', 'page', event.urlAfterRedirects);
			ga('send', 'pageview');
		}

		});
	}


  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
