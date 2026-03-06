import {Component, OnDestroy, OnInit, inject, Signal} from '@angular/core';
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

}
