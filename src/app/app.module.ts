// Angular Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Third party dependencies
import { DataTableModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';

// Application specific dependencies
import { AppComponent } from './app.component';
import { AtmLocatorComponent } from './atm_locator/component/atm-locator.component';
import { AtmLocatorService } from './atm_locator/service/atm-locator.service';

/**
 * @author Soumit Mandal
 * Root level Module with @NgModule as a decorator function
 */
@NgModule({
  declarations: [AppComponent, AtmLocatorComponent],
  imports: [BrowserModule, FormsModule, HttpModule, DataTableModule, PaginatorModule],
  providers: [AtmLocatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
