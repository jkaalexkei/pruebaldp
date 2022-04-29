import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionobjetivoppalComponent } from './seccionobjetivoppal.component';

describe('SeccionobjetivoppalComponent', () => {
  let component: SeccionobjetivoppalComponent;
  let fixture: ComponentFixture<SeccionobjetivoppalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionobjetivoppalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionobjetivoppalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
