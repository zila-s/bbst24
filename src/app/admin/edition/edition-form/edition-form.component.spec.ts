import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionFormComponent } from './edition-form.component';

describe('EditionFormComponent', () => {
  let component: EditionFormComponent;
  let fixture: ComponentFixture<EditionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditionFormComponent]
    });
    fixture = TestBed.createComponent(EditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
