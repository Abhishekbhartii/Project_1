// Angular Dependencies
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Application specific dependencies
import { AtmLocatorService } from '../service/atm-locator.service';
import { AtmLocator } from '../model/atm-locator';

/**
 * @author Soumit Mandal
 * AtmLocatorComponent is the core component
 * It fetches ATM data from the service class (AtmLocatorService)
 * Binds the returned data(or Error Code) with the
 * model instance for rendering the view
 */
@Component({
  selector: 'app-atm-locator',
  templateUrl: './atm-locator.component.html',
  styleUrls: ['./atm-locator.component.css']
})
export class AtmLocatorComponent implements OnInit {

  // Component properties
  allAtms: AtmLocator[] = [];
  statusCode: number;

  // Create constructor to get service instance
  constructor(private atmLocatorService: AtmLocatorService) { }

  // Create ngOnInit() and load ATM details
  ngOnInit(): void {
    this.getAllAtms();
  }

  // Fetch all ATM details
  getAllAtms() {
    this.atmLocatorService.getAllAtms()
      .subscribe(data => {
        this.allAtms = data.map(item => item.address)
      },
        errorCode => this.statusCode = errorCode
      );
  }
}
