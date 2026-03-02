import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {Post} from './interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  constructor() {
  }

  onPostLiked(postId: number): void {
    this.posts.update(posts =>
      posts.map(p =>
        p.id === postId ? { ...p, likes: (p.likes ?? 0) + 1 } : p
      )
    );
  }


  private posts: WritableSignal<Post[]> = signal<Post[]>([
    {
      id: 1,
      title: 'Blog Post Titel 1',
      content: 'lorem ipsum ajsdkjfahsdkljfhalskdjfhlakjsdf',
      author: 'ich234',
      date: new Date(),
      published: true,
      likes: 0,
    },
    {
      id: 2,
      title: 'Blog Post Titel 2',
      content: 'lorem ipsum woeijflksa',
      author: 'ichlkasldkflksjklös',
      date: new Date(),
      published: true,
      likes: 0,
    },
    {
      id: 3,
      title: 'Blog Post Titel 3',
      content: 'lorem ipsumlaksjdlf asdfasd',
      author: 'ich345',
      date: new Date(),
      published: false,
      likes: 0,
    },
    {
      id: 4,
      title: 'Blog Post Titel 4',
      content: 'lorem ipsum bnlasldjkf',
      author: 'ich456',
      date: new Date(),
      published: false,
      likes: 0,
    },
  ]);

  getAllPosts(): Signal<Post[]> {
    return this.posts.asReadonly();
  }
}
