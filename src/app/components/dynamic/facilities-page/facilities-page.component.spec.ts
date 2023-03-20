import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesPageComponent } from './facilities-page.component';

describe('FacilitiesPageComponent', () => {
  let component: FacilitiesPageComponent;
  let fixture: ComponentFixture<FacilitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilitiesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
