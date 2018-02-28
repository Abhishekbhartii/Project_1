import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

/**
 * @author Soumit Mandal
 * Test class (.spec) for AppComponent
 */
describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
