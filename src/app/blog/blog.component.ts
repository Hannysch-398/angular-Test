import {Component, OnDestroy, OnInit, inject, Signal, computed, effect} from '@angular/core';
import {Post} from '../interface/post';
import {BlogDetailComponent} from '../blog-detail/blog-detail.component';
import {PostService} from '../services/post.service';
import {JsonPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [
    BlogDetailComponent,
    JsonPipe,
    RouterLink
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit, OnDestroy {

  constructor() {
    effect(() => {
      console.log('Posts updated:', this.posts());
    });
  }

  ngOnDestroy(): void {
    console.log('Component ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('Component ngOnInit');
  }

  postService = inject(PostService);

  posts: Signal<Post[]> = this.postService.getAllPosts();
  totalLikes: Signal<number> = computed(() =>
    this.posts().reduce((sum, post) => sum + (post.likes ?? 0), 0)
  );

  popularPost = computed(() =>
    this.posts().sort((a, b) => b.likes - a.likes)[0].id
  )


}
