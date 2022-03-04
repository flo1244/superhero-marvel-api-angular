//API key used for demo purposes//

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {

  BaseUrl = 'https://gateway.marvel.com:443/v1/public/characters?limit=10&ts=1&apikey=781a3025fbf1817f45b4830c8e56d76b&hash=33aeccf188a7f13c5ee0c9c25d12bc8b';

  constructor(private http: HttpClient) { }

  //retrieves all superheros
 allCharacters(): Observable<any>{
    return this.http.get(this.BaseUrl);
 }
  //retrieves all comics
  allComics(): Observable<any>{
    const comicUrl = 'https://gateway.marvel.com:443/v1/public/comics?limit=100&ts=1&apikey=781a3025fbf1817f45b4830c8e56d76b&hash=33aeccf188a7f13c5ee0c9c25d12bc8b';
    return this.http.get(comicUrl);
  }

  //retrieves all series
  allSeries(): Observable<any>{
    const seriesUrl = 'https://gateway.marvel.com:443/v1/public/series?limit=100&ts=1&apikey=781a3025fbf1817f45b4830c8e56d76b&hash=33aeccf188a7f13c5ee0c9c25d12bc8b';
    return this.http.get(seriesUrl);
  }
  
  
  //retrieves characters by comics based off of the comics they've been in. Use this to display comics the characters have been in. 
  getComicsByCharacter(characterId: string): Observable<any>{
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=1&apikey=781a3025fbf1817f45b4830c8e56d76b&hash=33aeccf188a7f13c5ee0c9c25d12bc8b`;
    return this.http.get(comicByCharacterUrl);
  }
//retrieves the series the characters may have played a role in 
  getSeriesByCharacter(characterId: string): Observable<any>{
    const seriesByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?ts=1&apikey=781a3025fbf1817f45b4830c8e56d76b&hash=33aeccf188a7f13c5ee0c9c25d12bc8b`;
    return this.http.get(seriesByCharacterUrl);
  }

//use this to search characters by name
  getCharacterByName(characterName: string): Observable<any>{
    const characterByNameUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=1&apikey=781a3025fbf1817f45b4830c8e56d76b&hash=33aeccf188a7f13c5ee0c9c25d12bc8b`;
    return this.http.get(characterByNameUrl);
  }

}




