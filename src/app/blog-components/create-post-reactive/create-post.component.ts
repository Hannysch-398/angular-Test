import {Component, inject, Signal} from '@angular/core';
import {PostService} from '../../services/post.service';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CreatePost} from '../../interface/create-post';


@Component({
  selector: 'app-create-post',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  private formBuilder = inject(FormBuilder);
  postService = inject(PostService);
  submitted = false;
  post: CreatePost | undefined;

  postForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    content: [''],
    author: ['', [Validators.required]],
    date: [new Date(), [Validators.required]],
    published: [false, [Validators.required]],
    likes: [0]
  })


  authors: Signal<string[]> = this.postService.getAllAuthors();

  onSubmit(): void {
    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }
    this.post = this.convertToCreatePost();
    this.postService.createPost(this.post)
  }

  convertToCreatePost():CreatePost{
    const formValue = this.postForm.value;
    return {
      title: formValue.title ?? '',
      content: formValue.content ?? '',
      author: formValue.author ?? '',
      date: formValue.date ?? new Date(),
      published: formValue.published ?? false,
      likes: formValue.likes ?? 0
    };
}
}
