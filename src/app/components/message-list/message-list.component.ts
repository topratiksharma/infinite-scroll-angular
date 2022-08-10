import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { filter, map, pairwise, throttleTime, timer } from 'rxjs';
import { MessageService } from 'src/app/core/message.service';
import { Message } from 'src/app/types/message.interface';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  constructor(private messageService: MessageService, private ngZone: NgZone) {}

  @ViewChild(CdkVirtualScrollViewport) scroller!: CdkVirtualScrollViewport;

  public messages: Message[] = [];
  public loading = false;

  ngOnInit(): void {
    // this.messageService.getMessages().subscribe((res) => {
    //   this.messages = res;
    // });
    this.fetchMore();
  }

  listItems: any = [];

  fetchMore(): void {
    const images = [
      'IuLgi9PWETU',
      'fIq0tET6llw',
      'xcBWeU4ybqs',
      'YW3F-C5e8SE',
      'H90Af2TFqng',
    ];

    const newItems: any = [];
    for (let i = 0; i < 20; i++) {
      const randomListNumber = Math.round(Math.random() * 100);
      const randomPhotoId = Math.round(Math.random() * 4);
      newItems.push({
        title: 'List Item ' + randomListNumber,
        content:
          'This is some description of the list - item # ' + randomListNumber,
        image: `https://source.unsplash.com/${images[randomPhotoId]}/50x50`,
      });
    }
    this.loading = true;

    timer(500).subscribe(() => {
      this.listItems = [...this.listItems, ...newItems];
    });
  }

  ngAfterViewInit() {
    this.scroller
      .elementScrolled()
      .pipe(
        map(() => this.scroller.measureScrollOffset('bottom')),
        pairwise(),
        filter(([y1, y2]) => y2 < y1 && y2 < 140),
        throttleTime(200)
      )
      .subscribe(() => {
        this.ngZone.run(() => {
          this.fetchMore();
        });
      });
  }
}
