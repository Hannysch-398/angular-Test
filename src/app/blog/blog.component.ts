import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../interface/post';

@Component({
  selector: 'app-blog',
  imports: [],
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

  posts: Post[] = [
    {
      id: 1,
      title: "Blog Post Titel 1",
      content: "lorem ipsum ajsdkjfahsdkljfhalskdjfhlakjsdf",
      author: "ich234",
      date: new Date(),
      published: true,
    },
    {
      id: 2,
      title: "Blog Post Titel 2",
      content: "lorem ipsum woeijflksa",
      author: "ichlkasldkflksjklös",
      date: new Date(),
      published: true,
    },
    {
      id: 3,
      title: "Blog Post Titel 3",
      content: "lorem ipsumlaksjdlf asdfasd",
      author: "ich345",
      date: new Date(),
      published: false
    },
    {
      id: 4,
      title: "Blog Post Titel 4",
      content: "lorem ipsum bnlasldjkf",
      author: "ich456",
      date: new Date(),
      published: false,
    }
  ];
}
