import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MessagePalleteComponent } from './message-pallete.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MessagePalleteComponent],
  imports: [CommonModule, MatMenuModule, MatDividerModule, MatIconModule],
  exports: [MessagePalleteComponent],
})
export class MessagePalleteModule {}
