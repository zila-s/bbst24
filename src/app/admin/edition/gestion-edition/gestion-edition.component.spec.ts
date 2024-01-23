import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEditionComponent } from './gestion-edition.component';

describe('GestionEditionComponent', () => {
  let component: GestionEditionComponent;
  let fixture: ComponentFixture<GestionEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEditionComponent]
    });
    fixture = TestBed.createComponent(GestionEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
