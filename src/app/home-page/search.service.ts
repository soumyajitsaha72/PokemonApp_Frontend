import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class SearchService {
    searchKeyword = new EventEmitter<string>();
}