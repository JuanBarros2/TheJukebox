import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArtistComponent } from './info-artist.component';

describe('InfoArtistComponent', () => {
  let component: InfoArtistComponent;
  let fixture: ComponentFixture<InfoArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
