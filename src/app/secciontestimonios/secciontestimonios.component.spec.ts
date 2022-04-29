import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecciontestimoniosComponent } from './secciontestimonios.component';

describe('SecciontestimoniosComponent', () => {
  let component: SecciontestimoniosComponent;
  let fixture: ComponentFixture<SecciontestimoniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecciontestimoniosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecciontestimoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
