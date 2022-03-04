import { Component, OnInit } from '@angular/core';
import { HeroApiService } from '../service/hero-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private service: HeroApiService) { }

  allComics: any = [];

  ngOnInit(): void {
    this.service.allComics().subscribe((result) => {
      console.log(result);
      this.allComics = result.data.results;
      
    })
  }

}
