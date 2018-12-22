import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComProduitComponent } from './com-produit.component';

describe('ComProduitComponent', () => {
  let component: ComProduitComponent;
  let fixture: ComponentFixture<ComProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
