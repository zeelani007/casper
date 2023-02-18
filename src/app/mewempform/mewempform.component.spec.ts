import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MewempformComponent } from './mewempform.component';

describe('MewempformComponent', () => {
  let component: MewempformComponent;
  let fixture: ComponentFixture<MewempformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MewempformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MewempformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
