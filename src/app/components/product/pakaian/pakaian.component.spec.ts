import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakaianComponent } from './pakaian.component';

describe('PakaianComponent', () => {
  let component: PakaianComponent;
  let fixture: ComponentFixture<PakaianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PakaianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PakaianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
