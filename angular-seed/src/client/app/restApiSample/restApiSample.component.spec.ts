import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { FormsModule } from '@angular/forms';
import { async,ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { RestApiSample } from './restApiSample.component';

export function main() {
  fdescribe('RestApiSample component', () => {

    let fixture: ComponentFixture<RestApiSample>;
    let restInstance: RestApiSample;
    let de: DebugElement;
    let restApiSampleDOMEL:HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [RestApiSample]
      });
      TestBed
          .compileComponents()
          .then(() => {
            fixture = TestBed.createComponent(RestApiSample);
            restInstance = fixture.debugElement.componentInstance;
            restApiSampleDOMEL = fixture.debugElement.nativeElement;
          });

    });

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(RestApiSample);
      restInstance = fixture.componentInstance; // BannerComponent test instance
      restApiSampleDOMEL = fixture.debugElement.nativeElement;

      de = fixture.debugElement.query(By.css('h1'));
      restApiSampleDOMEL = de.nativeElement;
    });

    it('should display a different test title', () => {
      restInstance.title = 'Test Title';
      fixture.detectChanges();
      expect(restApiSampleDOMEL.textContent).toContain('Test Title');
    });
  });
}


