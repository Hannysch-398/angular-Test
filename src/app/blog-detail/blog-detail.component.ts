import {Component, inject, input, InputSignal} from '@angular/core';
import {Post} from '../interface/post';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-blog-detail',
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {

  posts: InputSignal<Post>= input.required<Post>();

  postService = inject(PostService);

//  like(postId: number): void {
//    this.postService.likePost(postId);
//  }

}
