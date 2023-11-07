import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

interface ChartData {
  country: string;
  rejected: number;
}

@Component({
  selector: 'app-cancelled-application',
  templateUrl: './cancelled-application.component.html',
  styleUrls: ['./cancelled-application.component.scss']
})
export class CancelledApplicationComponent implements OnInit {

  showLoader = false;

  @ViewChild('rejectedChart', { static: true }) chartDiv!: ElementRef;

  constructor() { }

  ngOnInit() {
    this.rejectedChart();

    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    });
  }

  rejectedChart() {
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    let chart = am4core.create("rejectedChart", am4charts.XYChart);

    // Add data
    let data: ChartData[] = [
      {
        country: "Monday",
        rejected: 51
      },
      {
        country: "Tuesday",
        rejected: 31
      },
      {
        country: "Wednesday",
        rejected: 71
      },
      {
        country: "Thursday",
        rejected: 9
      },
      {
        country: "Friday",
        rejected: 27
      }
    ];

    chart.data = data;

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.interpolationDuration = 2000;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

    // Create series
    function createSeries(field: string, name: string) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "country";
      series.columns.template.tooltipText = "[bold]{valueX}[/]";
      series.columns.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;

      let columnTemplate = series.columns.template;
      columnTemplate.maxX = 0;
      columnTemplate.draggable = true;

      columnTemplate.events.on("dragstart", function (ev: any) {
        let dataItem = ev.target.dataItem;
        if (dataItem) {
          let axisLabelItem = categoryAxis.dataItemsByCategory.getKey(dataItem.dataContext.country);
          if (axisLabelItem) {
            axisLabelItem.label.isMeasured = false;
            axisLabelItem.label.minX = axisLabelItem.label.pixelX;
            axisLabelItem.label.maxX = axisLabelItem.label.pixelX;
            axisLabelItem.label.dragStart(ev.target.interactions.pointer);
          }
        }
      });

      columnTemplate.events.on("dragstop", function (ev: any) {
        let dataItem = ev.target.dataItem;
        if (dataItem) {
          let axisLabelItem = categoryAxis.dataItemsByCategory.getKey(dataItem.dataContext.country);
          if (axisLabelItem) {
            axisLabelItem.label.dragStop();
            handleDragStop(ev);
          }
        }
      });

      columnTemplate.fill = am4core.color('green');
    }

    createSeries("rejected", "rejected");

    function handleDragStop(ev: any) {
      let data: ChartData[] = [];
      chart.series.each(function (series) {
        if (series instanceof am4charts.ColumnSeries) {
          series.dataItems.values.sort(compare);

          let indexes: { [key: string]: number } = {};
          series.dataItems.each(function (seriesItem) {
            let dataContext = seriesItem.dataContext as ChartData;
            indexes[dataContext.country] = seriesItem.index;
          });

          series.fill = am4core.color('green');

          categoryAxis.dataItems.values.sort(function (a, b) {
            let ai = indexes[a.category];
            let bi = indexes[b.category];
            if (ai == bi) {
              return 0;
            } else if (ai < bi) {
              return -1;
            } else {
              return 1;
            }
          });

          let i = 0;
          categoryAxis.dataItems.each(function (dataItem) {
            dataItem._index = i;
            i++;
          });

          categoryAxis.validateDataItems();
          series.validateDataItems();
        }
      });
    }

    function compare(a: any, b: any) {
      if (a.column.pixelY < b.column.pixelY) {
        return 1;
      }
      if (a.column.pixelY > b.column.pixelY) {
        return -1;
      }
      return 0;
    }
  }
}
