import { Component, OnInit } from '@angular/core';
// import { HttpService } from 'src/app/http.service';
import { HeroApiService } from 'src/app/service/hero-api.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {

  constructor(private service: HeroApiService) { }

  allCharacters: any[];//character array
  comics: any = [];//comics array
  series: any = [];//series array

  showSearchResult: boolean;
  displayComics: boolean;
  displaySeries: boolean;

  characterName: string;
  searchedCharacter: any = [];

  ngOnInit(): void {
    //setting search results initially to false boolean.
    this.showSearchResult = false;

    this.displayComics = false;
    this.displaySeries = false;

    this.service.allCharacters().subscribe((result) => {
      console.log(result);
      this.allCharacters = result.data.results;

    })
  }

  //finds a superhero when event is triggered by key event which search for characters full name. 
  findCharacter(event: any) {
    this.characterName = event.target.value;
    console.log(this.characterName);
    this.service.getCharacterByName(this.characterName).subscribe((result) => {
      console.log(result);
      if (result.data.count > 0) {
        this.showSearchResult = true;
        this.searchedCharacter = result.data.results;
      } else {
        this.ngOnInit(); //calling ngOnInit to clear the search once characters are deleted.
      }
    })
  }

  //finds the comics the characters have relations to... triggered by the click on button
  fetchComicsByCharacter(characterId: string) {
    console.log(characterId);
    this.service.getComicsByCharacter(characterId).subscribe((result) => {
      console.log(result);

      if (result.data.count > 0) {
        this.comics = result.data.results;
        this.displayComics = true;
      }
    });
  }

  //finds the series in which the characters have starred in.. triggered by the click on button. 
   fetchSeriesByCharacter(characterId: string) {
    console.log(characterId);
    this.service.getSeriesByCharacter(characterId).subscribe((result) => {
      console.log(result);

      if (result.data.count > 0) {
        this.series = result.data.results;
        this.displaySeries = true;
      }
    });
  }

}
