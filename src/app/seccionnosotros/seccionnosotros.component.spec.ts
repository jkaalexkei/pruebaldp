import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionnosotrosComponent } from './seccionnosotros.component';

describe('SeccionnosotrosComponent', () => {
  let component: SeccionnosotrosComponent;
  let fixture: ComponentFixture<SeccionnosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionnosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionnosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
