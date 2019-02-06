import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmZorroComponent } from './i-am-zorro.component';

describe('IAmZorroComponent', () => {
  let component: IAmZorroComponent;
  let fixture: ComponentFixture<IAmZorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IAmZorroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IAmZorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
