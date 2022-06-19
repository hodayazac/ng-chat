import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  ngOnInit(): void {}

  // ngOnDestroy(): void {
  //   this.subscriptions.unsubscribe();
  // }
  public signInWithGoogle(): void {
    this.authService.signInWithGoogle();
  }
  public signOutWithGoogle(): void {
    this.authService.signOut();
  }
}
