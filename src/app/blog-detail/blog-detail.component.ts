import {Component, effect, HostBinding, inject, input, InputSignal} from '@angular/core';
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
  mostLiked = input.required<boolean>();
  postService = inject(PostService);

  @HostBinding('class.mostLiked')
  get mostLikedClass(): boolean {
    return this.mostLiked();
  }

  constructor() {
    effect(() => {
      console.log(`Post: ${this.posts().id} | Likes: ${this.posts().likes}`);
    });
  }


//  like(postId: number): void {
//    this.postService.likePost(postId);
//  }

}
