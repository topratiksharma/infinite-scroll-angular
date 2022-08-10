import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePalleteComponent } from './message-pallete.component';

describe('MessagePalleteComponent', () => {
  let component: MessagePalleteComponent;
  let fixture: ComponentFixture<MessagePalleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagePalleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagePalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
