import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlaylistComponent } from './list-playlist.component';

describe('ListPlaylistComponent', () => {
  let component: ListPlaylistComponent;
  let fixture: ComponentFixture<ListPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
