import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRedirectComponent } from './sample-redirect.component';

describe('SampleRedirectComponent', () => {
  let component: SampleRedirectComponent;
  let fixture: ComponentFixture<SampleRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleRedirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
