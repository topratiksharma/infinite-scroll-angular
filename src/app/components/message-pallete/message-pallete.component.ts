import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/types/message.interface';

@Component({
  selector: 'message-pallete',
  templateUrl: './message-pallete.component.html',
  styleUrls: ['./message-pallete.component.scss'],
})
export class MessagePalleteComponent implements OnInit {
  @Input() public item: Message = {
    author: { name: 'test', photoUrl: 'alt' },
    content: 'test',
    id: 0,
    updated: 'today',
  };
  constructor() {}

  ngOnInit(): void {}
}
