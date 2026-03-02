import {Component, inject, OnDestroy, OnInit, Signal} from '@angular/core';
import { Post } from '../interface/post';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-blog',
  imports: [BlogDetailComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log('Component ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('Component ngOnInit');
  }

   postsService = inject(PostServiceService);

  posts: Signal<Post[]>= this.postsService.getAllPosts();
}
