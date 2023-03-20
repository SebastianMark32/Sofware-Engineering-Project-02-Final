import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPageComponent } from './faculty-page.component';

describe('FacultyPageComponent', () => {
  let component: FacultyPageComponent;
  let fixture: ComponentFixture<FacultyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
