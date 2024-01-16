import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieProjetComponent } from './categorie-projet.component';

describe('CategorieProjetComponent', () => {
  let component: CategorieProjetComponent;
  let fixture: ComponentFixture<CategorieProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieProjetComponent]
    });
    fixture = TestBed.createComponent(CategorieProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
