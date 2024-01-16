import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCandidatComponent } from './dialog-candidat.component';

describe('DialogCandidatComponent', () => {
  let component: DialogCandidatComponent;
  let fixture: ComponentFixture<DialogCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCandidatComponent]
    });
    fixture = TestBed.createComponent(DialogCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
