import { Component, OnInit } from '@angular/core';

import * as FusionCharts from 'fusioncharts';



const data = {
  "chart": {
    "xaxisname": "Date",
    "yaxisname": "Time",
    "labeldisplay": "auto",
    "theme": "fusion"
  },
  "categories": [
    {
      "category": [

        {
          "label": ""
        },
        {
          "label": ""
        }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "Single Order",
      "data": [

        {
          "value": "11"
        },
        {
          "value": "10"
        }
      ]
    },
    {
      "seriesname": "Multiple Order",
      "data": [
        {
          "value": "11"
        },
        {
          "value": "9"
        }
      ]
    }
  ]
};
const data_pie = {
  "chart": {
    "caption": "Market Share of Web Servers",
    "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
    "showlegend": "1",
    "showpercentvalues": "1",
    "legendposition": "bottom",
    "usedataplotcolorforlabels": "1",
    "theme": "fusion"
  },
  "data_pie": [
    {
      "label": "Apache",
      "value": "32647479"
    },
    {
      "label": "Microsoft",
      "value": "22100932"
    },
    {
      "label": "Zeus",
      "value": "14376"
    },
    {
      "label": "Other",
      "value": "18674221"
    }
  ]
};


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {
  width = 600;
  height = 400;
  type = 'mscolumn2d';
  dataFormat = 'json';
  dataSource = data;

  width_pie = 600;
  height_pie = 400;
  type_pie = 'pie2d';
  dataFormat_pie = 'json';
  dataSource_pie = data_pie;

  constructor() {
  }
  ngOnInit() {
  }

}
