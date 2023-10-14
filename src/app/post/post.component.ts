import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { BadInput } from '../errors/BadInput';
import { AppError } from '../errors/AppError';
import { NotFoundError } from '../errors/NotFoundError';
type Post = {
  id: number;
  title: string;
};
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: any;
  constructor(private service: PostService) {}
  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (response: Response) => {
        this.posts = response;
        console.log(this.posts);
      },
      error: (error: AppError) => {
        throw error; //to reduce re-write the content of the AppErrorHandler on each method
      },
    });
  }
  createPost(titleInput: HTMLInputElement) {
    let post: { id?: number; title: string } = { title: titleInput.value };
    this.posts.splice(0, 0, post);
    this.service.createService(post).subscribe({
      next: (response) => {
        post['id'] = response.id; //normally the server return an object with 'id' property
      },
      error: (error: AppError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError); //use it as the validation errors objects for our form
          alert('This Post is already exist' + error.originalError);
        } else throw error;
      },
    });
  }
  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.deleteService(post.id).subscribe({
      error: (error: AppError) => {
        this.posts.splice(index, 0, post); //rollback the changes when something get wrong
        if (error instanceof NotFoundError) {
          // this.form.setErrors(error.originalError); //use it as the validation errors objects for our form
          alert(error.originalError);
        } else throw error;
      },
    });
  }
  updatePost(title: HTMLInputElement, post: Post) {
    let newPost = { ...post, title: title.value };
    this.posts = this.posts.map((p: Post) => {
      if (post.id === p.id) return { ...post, title: title.value };
      return p;
    });
    this.service.updateService(newPost).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error: AppError) => {
        this.posts = this.posts.map((p: Post) => {
          if (post.id === p.id) return post;
          return p;
        });
        throw error;
      },
    });
  }
}
