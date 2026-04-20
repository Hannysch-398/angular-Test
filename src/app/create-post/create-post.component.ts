import {Component, inject, model, Signal} from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../interface/post';

@Component({
  selector: 'app-create-post',
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
// post: Post{
//   id: 0,
//   title: '',
//   content: '',
//   author: "";
//   date?: "12-12-2000";
//   published?: false;
//   likes: 0;
//
// }

  postService = inject(PostService);

  authors: Signal<string[]> = this.postService.getAllAuthors();
}
