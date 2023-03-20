import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { LeaderboardItem } from '../models/Leaderboard.interface';
import { first,tap,catchError } from 'rxjs';
import { User } from '../models/User';
import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class LeaderboardService{

  constructor(private http: HttpClient,private errorHandlerService:ErrorHandlerService) {}
  

  private url = 'https://softengback-production.up.railway.app/leaderboard';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  fetchAll(): Observable<LeaderboardItem[]> {
    return this.http.get<LeaderboardItem[]>(this.url);
  }

  updateBoard(column: string,userId: User["id"]): Observable<LeaderboardItem> {
    return this.http.post<LeaderboardItem>(this.url,
      {
        column:column,
        id:userId
      },this.httpOptions).pipe(first(),
        catchError(this.errorHandlerService.handleError<LeaderboardItem>("updateBoard"))
    );
  }
}