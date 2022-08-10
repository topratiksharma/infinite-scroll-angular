import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Message, MessageResponse } from '../types/message.interface';
// import { BASE_URL } from 'src/app/components/shared/constant';
// import { Message, MessageResponse } from 'src/app/components/shared/types';

export const API_URL = 'https://message-list.appspot.com/';
export const BASE_URL = 'https://message-list.appspot.com/messages';

export const MINIMUM_MESSAGE_THRESHOLD = 8;

export const MESSAGE_SLIDE_THRESHOLD = 200;

@Injectable({ providedIn: 'root' })
export class MessageService {
  public token: string = '';
  constructor(private http: HttpClient) {}

  public getMessages(): Observable<Message[]> {
    const queryParams = new HttpParams().append('pageToken', this.token);
    return this.http
      .get<MessageResponse>(BASE_URL, { params: queryParams })
      .pipe(catchError(this.handleError<MessageResponse>('getMessages')))
      .pipe(map((response) => this.savetoken(response)));
  }

  private savetoken(response: MessageResponse) {
    this.token = response?.pageToken;
    return response.messages;
  }

  private handleError<T>(method = 'server') {
    return (error: any): Observable<T> => {
      console.error(error);
      throw new Error('Error occured at: ' + method);
    };
  }
}
