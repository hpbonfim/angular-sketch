import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPublicComponent } from './info.component';

describe('InfoPublicComponent', () => {
  let component: InfoPublicComponent;
  let fixture: ComponentFixture<InfoPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
