import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import * as paper from 'paper';
import { Observable, zip } from 'rxjs';
import { element } from 'protractor';
import * as math from 'mathjs';


import { create } from 'domain';

import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import { ParsedProperty } from '@angular/compiler';

import { HttpClient } from '@angular/common/http';


export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

export interface MapInformation {
  id: number;
  reader: paper.Path.Circle;
  text: paper.PointText;
}

@Component({
  selector: 'app-mapboard',
  templateUrl: './mapboard.component.html',
  styleUrls: ['./mapboard.component.css']
})

export class MapboardComponent implements OnInit {

  public chart: Chart;

  public type: ChartType = 'Line';

  public options: any;
  dataMul: Chartist.IChartistData = {
    labels: [
    ],
    series: []
  };
  dataSum: Chartist.IChartistData = {
    labels: [
    ],
    series: [
    ]
  };

  dataDivSum: Chartist.IChartistData = {
    labels: [
    ],
    series: [
    ]
  };

  dataDivMul: Chartist.IChartistData = {
    labels: [
    ],
    series: [
    ]
  };
  data: Chartist.IChartistData = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    series: [
      [
        12,
        9,
        7,
        8,
        5
      ],
      [
        2,
        1,
        3.5,
        7,
        3
      ],
      [
        1,
        3,
        4,
        5,
        6
      ]
    ]
  };

  points = [];
  readonly picoTime = 15.65;
  readonly speedOfLight = 3 * math.pow(10, 8);
  readonly ratio = {
    x: 2.5,
    y: 5
  };

  

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    
  }

 
}
