import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionListComponent } from './edition-list.component';

describe('EditionListComponent', () => {
  let component: EditionListComponent;
  let fixture: ComponentFixture<EditionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditionListComponent]
    });
    fixture = TestBed.createComponent(EditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
