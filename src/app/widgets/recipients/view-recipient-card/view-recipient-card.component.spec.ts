import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecipientCardComponent } from './view-recipient-card.component';

describe('ViewRecipientCardComponent', () => {
  let component: ViewRecipientCardComponent;
  let fixture: ComponentFixture<ViewRecipientCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRecipientCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecipientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
