import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-total-application',
  templateUrl: './total-application.component.html',
  styleUrls: ['./total-application.component.scss']
})
export class TotalApplicationComponent implements OnInit {

  showLoader = false;

  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef;

  constructor(private ngZone: NgZone) {
  }

  ngOnInit() {
    this.createChart();

    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    },2000)
  }

  createChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    let data = [];
    let value = 50;
    for (var i = 0; i < 300; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: date, value: value });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;

    dateAxis.fill = am4core.color('green');

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}"

    series.fill = am4core.color('black');


    series.stroke = am4core.color('green');

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = dateAxis;

    chart.scrollbarX = new am4core.Scrollbar();


  }
}
