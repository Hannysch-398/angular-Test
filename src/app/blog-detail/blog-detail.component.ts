import {Component, inject, input, InputSignal} from '@angular/core';
import {Post} from '../interface/post';
import {PostServiceService} from '../post-service.service';

@Component({
  selector: 'app-blog-detail',
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  postsService = inject(PostServiceService);

  posts: InputSignal<Post>= input.required<Post>();


}
