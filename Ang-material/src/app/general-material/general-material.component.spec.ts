import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMaterialComponent } from './general-material.component';

describe('GeneralMaterialComponent', () => {
  let component: GeneralMaterialComponent;
  let fixture: ComponentFixture<GeneralMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
