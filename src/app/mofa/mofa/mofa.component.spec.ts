import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MofaComponent } from './mofa.component';

describe('MofaComponent', () => {
  let component: MofaComponent;
  let fixture: ComponentFixture<MofaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MofaComponent]
    });
    fixture = TestBed.createComponent(MofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
