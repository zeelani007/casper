import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MewemployeComponent } from './mewemploye.component';

describe('MewemployeComponent', () => {
  let component: MewemployeComponent;
  let fixture: ComponentFixture<MewemployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MewemployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MewemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
