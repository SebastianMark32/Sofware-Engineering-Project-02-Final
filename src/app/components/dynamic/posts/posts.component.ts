import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl,FormGroup,NgForm,Validator, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Post } from '../../models/Post';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent{
  @ViewChild("formDirective") formDirective:NgForm;

  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup; 

  constructor(private postService: PostService, private authService:AuthService){  }

  ngOnInit(){
    this.form = this.createFormGroup();
  }

  createFormGroup():FormGroup{
    return new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(5)]),
      body: new FormControl("", [Validators.required, Validators.minLength(10)]),

    })
  }

  onSubmit(formData: Pick<Post,"title" | "body">) :void{
    this.postService.createPost(formData,this.authService.userId).pipe(first()).subscribe(()=>{
      this.create.emit(null);
    })
    
    this.form.reset();
    this.formDirective.resetForm();
  }
}