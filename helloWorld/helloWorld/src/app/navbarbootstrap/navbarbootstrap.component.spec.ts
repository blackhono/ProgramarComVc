import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarbootstrapComponent } from './navbarbootstrap.component';

describe('NavbarbootstrapComponent', () => {
  let component: NavbarbootstrapComponent;
  let fixture: ComponentFixture<NavbarbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
