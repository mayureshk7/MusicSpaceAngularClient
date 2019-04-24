import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YTResultsComponent } from './ytresults.component';

describe('YTResultsComponent', () => {
  let component: YTResultsComponent;
  let fixture: ComponentFixture<YTResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YTResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YTResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
