import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraseccionComponent } from './primeraseccion.component';

describe('PrimeraseccionComponent', () => {
  let component: PrimeraseccionComponent;
  let fixture: ComponentFixture<PrimeraseccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraseccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraseccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
