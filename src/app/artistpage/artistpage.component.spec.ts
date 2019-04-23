import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistpageComponent } from './artistpage.component';

describe('ArtistpageComponent', () => {
  let component: ArtistpageComponent;
  let fixture: ComponentFixture<ArtistpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
