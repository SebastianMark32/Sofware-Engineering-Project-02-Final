import { Component } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';
import { Post } from '../../models/Post';
import { User } from '../../models/User';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent {

  posts$:Observable<Post[]>;
  userId:User["id"];
  constructor(private postService:PostService, private authService:AuthService){

  }
  ngOnInit(){
    this.posts$ = this.fetchAll();
    this.userId = this.authService.userId;
  }
  createPost() :void{
    this.posts$ = this.fetchAll();
  }
  fetchAll(): Observable<Post[]>{
    return this.postService.fetchAll();
  }

  deletePost(postId: Pick<Post,"id"> | number): void {
    this.postService.deletePost(postId).subscribe(() => (this.posts$ = this.fetchAll()));
  }
}
