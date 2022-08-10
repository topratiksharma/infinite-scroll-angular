import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListComponent } from './message-list.component';
import { MessagePalleteModule } from '../message-pallete/message-pallete.module';
import { MessageListRouting } from './message-list.routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [MessageListComponent],
  imports: [
    CommonModule,
    MessageListRouting,
    MessagePalleteModule,
    MatToolbarModule,
    ScrollingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
  ],
})
export class MessageListModule {}
