import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { of, forkJoin } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

export const BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable()
export class PokemonApiService {

  constructor(private httpClient: HttpClient) { }

  public getListOfPokemon(limit: string, offset ?: string) {
    const params = new HttpParams()
      .set('offset', offset ? offset : '0')
      .set('limit', limit);
    return this.httpClient
      .get<any>(`${BASE_URL}/pokemon`, { observe: 'response', params: params })
      .pipe(
        map(res => res.body.results),
        catchError(error => of(error.url))
      );
  }

  public getPokemonDetails(urlList: Array<any>) {
    urlList = urlList.map(url => this.httpClient.get<any>(url));
    return forkJoin(urlList);
  }
}
