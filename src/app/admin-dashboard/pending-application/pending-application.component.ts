import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
@Component({
  selector: 'app-pending-application',
  templateUrl: './pending-application.component.html',
  styleUrls: ['./pending-application.component.scss']
})
export class PendingApplicationComponent implements OnInit {

  @ViewChild('pendingChart', { static: true }) chartDiv!: ElementRef;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.pendingChart();
  }

  pendingChart() {
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("pendingChart", am4charts.XYChart);

    // Add Static Data for chart

    chart.data = [{
      "country": "Monday",
      "visits": 65
    }, {
      "country": "Tuesday",
      "visits": 102
    }, {
      "country": "Wednesday",
      "visits": 18
    }, {
      "country": "Thursday",
      "visits": 112
    }, {
      "country": "Friday",
      "visits": 72
    }];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {

      return dy;
    });

    categoryAxis.fill = am4core.color('green');

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    series.fill = am4core.color('green');

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }

}
