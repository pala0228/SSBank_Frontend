import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * @ignore
   * routerUrl is used to get currently activated route url
   */
  routerUrl: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.routerUrl = event.url.slice(1, event.url.length);
      }
    });
  }
  /**
   * @ignore
   * Method to navigate to specified route
   */
  navigateTo(route: string) {
    this.router.navigate(["/" + route]);
  }
  /**
   * @ignore
   * Method to logout user from the application
   */
  onLogout() {
    this.router.navigate(["/home"]);
  }

}
