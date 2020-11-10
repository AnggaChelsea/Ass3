import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LengkapiprofileComponent } from './lengkapiprofile.component';

describe('LengkapiprofileComponent', () => {
  let component: LengkapiprofileComponent;
  let fixture: ComponentFixture<LengkapiprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LengkapiprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengkapiprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
