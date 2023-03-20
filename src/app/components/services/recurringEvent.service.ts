import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { RecurringEvent } from '../models/Recurring.interface';


@Injectable({providedIn: 'root'})
export class RecurringEventService{

  constructor(private http: HttpClient) {}
  public RecurringData!: RecurringEvent[]

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  getEvent(): Observable<RecurringEvent[]> {
    return this.http.get<RecurringEvent[]>(
      'http://localhost:3000/calendar'
    );
  }

  createEvent(
    formData: Partial<RecurringEvent>,
  ): Observable<RecurringEvent> {
    return this.http.post<RecurringEvent>(
      'http://localhost:3000/calendar',
      {
        title: formData.title,
        freq: formData.freq,
        bymonth: formData.bymonth,
        bymonthday: formData.bymonthday,
        byweekday: formData.byweekday,
      },
    );
  }
}