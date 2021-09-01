import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Chart, ChartData, registerables} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {

  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D | null;
  chart: Chart | undefined;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.canvas = <HTMLCanvasElement>document.getElementById('chart');
    this.ctx = this.canvas!.getContext('2d');
    this.drawChart();
  }

  drawChart() {
    const data: ChartData = {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 20, 30, 40],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          order: 1
        },
        {
          label: 'Dataset 2',
          data: [50, 50, 50, 50],
          fill: false,
          borderColor: 'rgb(30,82,30)',
          // backgroundColor: 'rgb(54, 162, 235)',
          type: 'line',
          order: 0
        }
      ]
    };

    this.chart = new Chart(this.ctx!, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Combined Line/Bar Chart'
          }
        }
      },
    });
  }
}
