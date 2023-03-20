import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOrgPageComponent } from './student-org-page.component';

describe('StudentOrgPageComponent', () => {
  let component: StudentOrgPageComponent;
  let fixture: ComponentFixture<StudentOrgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentOrgPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentOrgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
