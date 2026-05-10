import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {Post} from '../interface/post';
import {CreatePost} from '../interface/create-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: WritableSignal<Post[]> = signal<Post[]>([
    {
      id: 1,
      title: "Blog Post Titel 1",
      content: "lorem ipsum ajsdkjfahsdkljfhalskdjfhlakjsdf",
      author: "ich234",
      date: new Date(),
      published: true,
      likes: 0
    },
    {
      id: 2,
      title: "Blog Post Titel 2",
      content: "lorem ipsum woeijflksa",
      author: "ichlkasldkflksjklös",
      date: new Date(),
      published: true,
      likes: 0
    },
    {
      id: 3,
      title: "Blog Post Titel 3",
      content: "lorem ipsumlaksjdlf asdfasd",
      author: "ich345",
      date: new Date(),
      published: false,
      likes: 0
    },
    {
      id: 4,
      title: "Blog Post Titel 4",
      content: "lorem ipsum bnlasldjkf",
      author: "ich456",
      date: new Date(),
      published: false,
      likes: 0
    }
  ]);

  getAllPosts() : Signal<Post[]> {
    return this.posts.asReadonly();
  }

  getAllAuthors(): Signal<string[]> {
    return computed(() =>
      [...new Set(this.posts().map(post => post.author).filter(Boolean))]
    );
  }

  getPost(idSignal: Signal<number>): Signal<Post | undefined> {
    return computed(() =>
      this.posts().find(post => post.id === idSignal())
    );
  }

  likePost(postId: number): void {
    this.posts.update(posts =>
      posts.map(p =>
        p.id === postId ? { ...p, likes: (p.likes ?? 0) + 1 } : p
      )
    );
  }
  createPost(post: CreatePost): void {
    this.posts.update(posts => [...posts, this.convertToPost(post)]);
    console.log(this.posts());
  }

  convertToPost(post: CreatePost): Post {
    return {
      id: this.posts().length + 1,
      title: post.title,
      content: post.content,
      author: post.author,
      date: new Date(),
      published: post.published,
      likes: 0
    };
  }

}
