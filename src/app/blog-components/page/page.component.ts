import { Component } from '@angular/core';
import {BlogComponent} from '../blog/blog.component';

@Component({
  selector: 'app-page',
  imports: [BlogComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
  standalone: true,
})
export class PageComponent {

}
