import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucompComponent } from './menucomp.component';

describe('MenucompComponent', () => {
  let component: MenucompComponent;
  let fixture: ComponentFixture<MenucompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenucompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
