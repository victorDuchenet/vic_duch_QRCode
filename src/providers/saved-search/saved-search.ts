import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { storedSearch } from '../../app/models/storedSearch';


@Injectable()
export class SavedSearchProvider {

  constructor(public http: HttpClient) {
  }

  private store : storedSearch[] = new Array();


  storeSearch(textSearched : string , dateSearch : Date){
    this.store.push(new storedSearch(textSearched,dateSearch));
  }

  getStoredSearch() : storedSearch[] {
    return this.store;
  }
}
