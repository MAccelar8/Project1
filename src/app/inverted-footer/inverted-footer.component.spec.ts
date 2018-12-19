import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedFooterComponent } from './inverted-footer.component';

describe('InvertedFooterComponent', () => {
  let component: InvertedFooterComponent;
  let fixture: ComponentFixture<InvertedFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvertedFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
