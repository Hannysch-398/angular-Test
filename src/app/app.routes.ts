import {Routes} from '@angular/router';
import {PageComponent} from "./blog-components/page/page.component";
import {appHome} from './other-components/home/home';
import {TestComponent} from './other-components/test/test.component';
import {TextBoxComponent} from './other-components/text-box/text-box.component';
import {BlogDetailComponent} from './blog-components/blog-detail/blog-detail.component';
import {CreatePostComponent} from './blog-components/create-post-reactive/create-post.component';


export const routes: Routes = [
  {path: "", redirectTo: "/blog", pathMatch: "full"},
  { path: "blog", component: PageComponent},
  {path: "home", component: appHome}, {path: "test", component: TestComponent},
  {path: "textBox", component: TextBoxComponent},
  {path: "blog/detail/:id", component: BlogDetailComponent},
  {path: "create", component: CreatePostComponent}];
