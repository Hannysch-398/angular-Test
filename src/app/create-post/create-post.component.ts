import {Component, inject, model, Signal} from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../interface/post';
import {FormsModule} from '@angular/forms';
import {CreatePost} from '../interface/create-post';

@Component({
  selector: 'app-create-post',
  imports: [
    FormsModule
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  post: CreatePost = {
    title: '',
    content: '',
    author: '',
    date: new Date(),
    published: false,
    likes: 0
  };

  postService = inject(PostService);

  authors: Signal<string[]> = this.postService.getAllAuthors();

  onSubmit(post: CreatePost): void {
    this.postService.createPost(post)
  }
}
