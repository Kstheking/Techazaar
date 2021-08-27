import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { share } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchProductService {

  public query: Subject<string> = new Subject();
  public queryString: Observable<string>;

  constructor() {
    this.queryString = this.query.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      share()
    );
   }
}
