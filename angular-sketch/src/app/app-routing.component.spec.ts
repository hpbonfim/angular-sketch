import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRouterModule } from './app-routing.module';

describe('AppComponent', () => {
  let component: AppRouterModule;
  let fixture: ComponentFixture<AppRouterModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRouterModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRouterModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
