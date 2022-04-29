import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccioninscripcionComponent } from './seccioninscripcion.component';

describe('SeccioninscripcionComponent', () => {
  let component: SeccioninscripcionComponent;
  let fixture: ComponentFixture<SeccioninscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccioninscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccioninscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
