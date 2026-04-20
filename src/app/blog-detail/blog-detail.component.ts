import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-blog-detail',
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  private activatedRoute = inject(ActivatedRoute);
  postService = inject(PostService);

  detailPostID = signal(0);

  post = this.postService.getPost(this.detailPostID);

  constructor() {

    // const postId : number = Number(this.route.snapshot.params['id']);
    this.activatedRoute.params.subscribe((params) => {
      this.detailPostID.set(Number(params['id']));
    });
  }
}
