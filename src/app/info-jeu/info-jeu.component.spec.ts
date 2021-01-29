import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJeuComponent } from './info-jeu.component';

describe('InfoJeuComponent', () => {
  let component: InfoJeuComponent;
  let fixture: ComponentFixture<InfoJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoJeuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
