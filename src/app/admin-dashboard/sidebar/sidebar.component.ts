import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showLoader = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    })

  }


  logout() {
    this.router.navigate(['/admin-login/login'], { queryParams: this.logout });
  }


}
