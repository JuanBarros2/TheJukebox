import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMusicComponent } from './info-music.component';

describe('InfoMusicComponent', () => {
  let component: InfoMusicComponent;
  let fixture: ComponentFixture<InfoMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
