import {Component, input, InputSignal} from '@angular/core';
import {Post} from '../interface/post';

@Component({
  selector: 'app-blog-detail',
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {

  posts: InputSignal<Post>= input.required<Post>();

  // liked = output<void>();
  //
  // like() {
  //   this.liked.emit();
  // }

}
