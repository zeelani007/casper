import { Component, OnInit, OnDestroy, OnChanges,DoCheck } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router,Route, Event, NavigationStart, NavigationEnd, NavigationCancel,ActivatedRoute, NavigationError } from '@angular/router';
import { AuthenticationService } from './_services';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title = 'ng crm';
  user: any = null;
  isMobile: boolean;
  mode = "side"
  uiContent = "content"
  progrssBarClass = "progress-bar";
  isloading = true;
   isadmin=false;
  isMenuVisible=false;
  

  constructor(
    // private loadingBar: SlimLoadingBarService,
    private route: Router,
    public authService: AuthenticationService,
    private breakpointObserver: BreakpointObserver
  )
   {
    console.log(" constructor")

    this.isloading = true;

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      console.log(result)
      if (result.matches) {
        // this.activateHandsetLayout();
        this.isMobile = true;
        this.mode = "over"
        this.uiContent = "mobile-content"
      }
      else {
        this.isMobile = false;
        this.mode = "side"
        this.uiContent = "content"
      }
    });

    // this.route.events.subscribe((event: Event) => {
    //   this.navigationInterceptor(event);
    // })
    //   ;
  }

  ngOnChanges() {
    console.log(" ngOnChanges")
  }


  ngOnInit(): void {
    console.log(" ngOnInit")
    this.user = this.authService.getUser();
    this.isloading = false;
  }

  logout(): void {
    // localStorage.removeItem('currentUser');
    this.authService.logout()
    this.route.navigate(['login']);
  }



  isAuth(isAuth?: any) {
    if (isAuth) {
      this.user = this.authService.getUser()
      // this.user = JSON.parse(localStorage.getItem(APP_USER_PROFILE)) || <User>{};
    }
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this. progrssBarClass = "progress-bar";
      this.isloading = true;
    }
    if (event instanceof NavigationEnd) {
      this. progrssBarClass = "progress-bar-hidden";
      this.isloading = false;
    }
    if (event instanceof NavigationCancel) {
      this. progrssBarClass = "progress-bar-hidden";
      this.isloading = false;
    }
    if (event instanceof NavigationError) {
      this. progrssBarClass = "progress-bar-hidden";
      this.isloading = false;
    }

  }


  ngOnDestroy() {
    this.breakpointObserver.ngOnDestroy()
    this.authService.logout()
    //   this.router.events
    // this.breakpoint.
  }
  ngDoCheck(): void {
    let currentroute = this.route.url;
    let role=sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if (role == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }

 
}
