import { Component, OnInit } from '@angular/core';
import { HeroApiService } from '../service/hero-api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  allSeries: any = [];

  constructor(private service: HeroApiService) { }

  ngOnInit(): void {
    this.service.allSeries().subscribe((result) => {
      console.log(result);
      this.allSeries = result.data.results;
    })
  }

}
