// Angular Dependencies
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Application specific dependencies
import { AtmLocator } from '../model/atm-locator';
import { environment as env } from '../../../environments/environment.prod';

/**
 * @author Soumit Mandal
 * AtmLocatorService is the service class
 * It queries a data store using http.get(<URL>)
 * and returns an Observable
 */
@Injectable()
export class AtmLocatorService {

  // Constructor injection for HTTP object
  constructor(private http: Http) { }

  // Fetch all ING ATM locations
  getAllAtms(): Observable<any[]> {
    return this.http.get(env.allAtmUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
