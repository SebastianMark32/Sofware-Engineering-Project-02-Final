import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyResourcesPageComponent } from './nearby-resources-page.component';

describe('NearbyResourcesPageComponent', () => {
  let component: NearbyResourcesPageComponent;
  let fixture: ComponentFixture<NearbyResourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyResourcesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearbyResourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
