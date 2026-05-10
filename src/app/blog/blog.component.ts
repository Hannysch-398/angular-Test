import {Component, OnDestroy, OnInit, inject, Signal, computed, effect} from '@angular/core';
import {Post} from '../interface/post';
import {PostService} from '../services/post.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [
    RouterLink,
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

  allLikes: Signal<number> = computed(() =>
    this.posts().reduce((sum, post) => sum + (post.likes ?? 0), 0)
  );

  mostLikedPost: Signal<number> = computed(() => {
    let maxLikes = 0;
    let mostLikedIndex = 0;
    for (let i = 0; i < this.posts().length; i++) {
      const currentLikes = this.posts()[i].likes ?? 0;
      if (currentLikes > maxLikes) {
        maxLikes = currentLikes;
        mostLikedIndex = i+1;
      }
    }
    return mostLikedIndex;
  });


}
