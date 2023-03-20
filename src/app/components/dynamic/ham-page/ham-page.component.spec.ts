import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamPageComponent } from './ham-page.component';

describe('HamPageComponent', () => {
  let component: HamPageComponent;
  let fixture: ComponentFixture<HamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
