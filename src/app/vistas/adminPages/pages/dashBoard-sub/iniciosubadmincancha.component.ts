import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { LegendPosition } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-iniciosubadmincancha',
  templateUrl: './iniciosubadmincancha.component.html',
  styleUrls: ['./iniciosubadmincancha.component.css']
})
export class IniciosubadmincanchaComponent implements OnInit {

  @ViewChild('scroll') scroll: ElementRef;

  public legendPosition: LegendPosition = LegendPosition.Below;

  resizeChart(width: any): void {
    this.view = [width, 320]
  }
  view: [number, number] = [630, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  legend: boolean = true;
  
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  

  canchas =[
    {
    "name": "Canchas",
    "series": [
      {
        "name": "Cancha 1",
        "value": 20
      },
      {
        "name": "Cancha 2",
        "value": 50
      },
      {
        "name": "Cancha 3",
        "value": 30
      }
    ]
  }
];
  cancha1 =[
    {
      "name" : "Reservadas",
      "value": 45
    },{
      "name" : "Disponibles",
      "value": 15
    },{
      "name" : "Realizadas",
      "value": 16
    },{
      "name" : "Canceladas",
      "value": 14
    },
  ];
  cancha2 =[
    {
      "name" : "Reservadas",
      "value": 50
    },{
      "name" : "Disponibles",
      "value": 15
    },{
      "name" : "Realizadas",
      "value": 23
    },{
      "name" : "Canceladas",
      "value": 2
    },
  ];

  constructor() {
    // Object.assign(this, { single });
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
  }
}
