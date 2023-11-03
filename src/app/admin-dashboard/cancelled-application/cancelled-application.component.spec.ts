import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledApplicationComponent } from './cancelled-application.component';

describe('CancelledApplicationComponent', () => {
  let component: CancelledApplicationComponent;
  let fixture: ComponentFixture<CancelledApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelledApplicationComponent]
    });
    fixture = TestBed.createComponent(CancelledApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
