import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtistsComponent } from './list-artists.component';

describe('ListArtistsComponent', () => {
  let component: ListArtistsComponent;
  let fixture: ComponentFixture<ListArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
