import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  showLoader = false;

  constructor(){}

  ngOnInit(): void {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    },2000);
    
  }

}
