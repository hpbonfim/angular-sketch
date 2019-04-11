import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavAuthComponent } from './barra-nav-auth.component';

describe('BarraNavAuthComponent', () => {
  let component: BarraNavAuthComponent;
  let fixture: ComponentFixture<BarraNavAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNavAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
