import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaseccionComponent } from './segundaseccion.component';

describe('SegundaseccionComponent', () => {
  let component: SegundaseccionComponent;
  let fixture: ComponentFixture<SegundaseccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundaseccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaseccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
