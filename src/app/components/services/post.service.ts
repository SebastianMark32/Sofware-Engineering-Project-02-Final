import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { Observable,BehaviorSubject } from 'rxjs';
import { first,tap,catchError } from 'rxjs';
import { User } from '../models/User';
import { Post } from '../models/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://softengback-production.up.railway.app/post";
  httpOptions: {headers:HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  constructor(private http: HttpClient, private errorHandlerService:ErrorHandlerService) { 

    
  }

  fetchAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url,{responseType:"json"}).pipe(
      catchError(this.errorHandlerService.handleError<Post[]>("fetchAll",[])),
    );
  } 

  createPost(formData:Partial<Post>,userId: User["id"]): Observable<Post>{
    return this.http.post<Post>(this.url,{title:formData.title, body:formData.body, user: userId},this.httpOptions).pipe(
      catchError(this.errorHandlerService.handleError<Post>("createPost")),
    );
  }

  deletePost(postId:Pick<Post,"id"> | number): Observable<{}>{
    return this.http.delete<Post>(`${this.url}/${postId}`,this.httpOptions).pipe(first(),
    catchError(this.errorHandlerService.handleError<Post>("deletePost")) 
    );
    
  }

}
