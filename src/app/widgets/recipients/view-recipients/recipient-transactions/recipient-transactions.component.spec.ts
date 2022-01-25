import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientTransactionsComponent } from './recipient-transactions.component';

describe('RecipientTransactionsComponent', () => {
  let component: RecipientTransactionsComponent;
  let fixture: ComponentFixture<RecipientTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
