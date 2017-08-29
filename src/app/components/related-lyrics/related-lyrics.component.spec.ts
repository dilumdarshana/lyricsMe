import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedLyricsComponent } from './related-lyrics.component';

describe('RelatedLyricsComponent', () => {
  let component: RelatedLyricsComponent;
  let fixture: ComponentFixture<RelatedLyricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedLyricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
