import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneApplicationComponent } from './done-application.component';

describe('DoneApplicationComponent', () => {
  let component: DoneApplicationComponent;
  let fixture: ComponentFixture<DoneApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoneApplicationComponent]
    });
    fixture = TestBed.createComponent(DoneApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
