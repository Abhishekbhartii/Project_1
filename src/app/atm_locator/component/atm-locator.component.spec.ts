/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtmLocatorComponent } from './atm-locator.component';

describe('AtmLocatorComponent', () => {
  let component: AtmLocatorComponent;
  let fixture: ComponentFixture<AtmLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
