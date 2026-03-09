import {Component, OnDestroy, OnInit, inject, Signal, computed} from '@angular/core';
import {Post} from '../interface/post';
import {BlogDetailComponent} from '../blog-detail/blog-detail.component';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-blog',
  imports: [
    BlogDetailComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit ,OnDestroy{


  ngOnDestroy() :void{
    console.log('Component ngOnDestroy');
  }
  ngOnInit ():void{
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
