import {Routes} from '@angular/router';
import {PageComponent} from "./page/page.component";
import {appHome} from './home/home';
import {TestComponent} from './test/test.component';
import {TextBoxComponent} from './text-box/text-box.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {CreatePostComponent} from './create-post/create-post.component';


export const routes: Routes = [{path: "", component: PageComponent}, {
  path: "blog",
  component: PageComponent
}, {path: "home", component: appHome}, {path: "test", component: TestComponent}, {
  path: "textBox",
  component: TextBoxComponent
}, {path: "blog/detail/:id", component: BlogDetailComponent}, {path: "create", component: CreatePostComponent}];
