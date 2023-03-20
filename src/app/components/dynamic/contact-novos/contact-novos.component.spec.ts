import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNovosComponent } from './contact-novos.component';

describe('ContactNovosComponent', () => {
  let component: ContactNovosComponent;
  let fixture: ComponentFixture<ContactNovosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactNovosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactNovosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
