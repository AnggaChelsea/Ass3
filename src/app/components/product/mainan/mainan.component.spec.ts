import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainanComponent } from './mainan.component';

describe('MainanComponent', () => {
  let component: MainanComponent;
  let fixture: ComponentFixture<MainanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
