import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  dashBoard() {
    this.router.navigate(['/mofa-admin/user-dashboard']);
  }

  logout() {
    this.router.navigate(['/admin-login/login']);
  }

  updatePassword() {
    this.router.navigate(['/mofa-admin/change-password']);
  }

  setting() {
    this.router.navigate(['/mofa-admin/setting']);
  }

  appointment() {
    this.router.navigate(['/mofa-admin/appointment']);
  }

}
