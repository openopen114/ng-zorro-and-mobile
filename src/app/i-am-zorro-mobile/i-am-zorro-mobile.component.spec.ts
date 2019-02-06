import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmZorroMobileComponent } from './i-am-zorro-mobile.component';

describe('IAmZorroMobileComponent', () => {
  let component: IAmZorroMobileComponent;
  let fixture: ComponentFixture<IAmZorroMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IAmZorroMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IAmZorroMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
