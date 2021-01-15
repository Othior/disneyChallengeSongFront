import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoueComponent } from './roue.component';

describe('RoueComponent', () => {
  let component: RoueComponent;
  let fixture: ComponentFixture<RoueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
