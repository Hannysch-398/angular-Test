import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { appHome } from '../app/home/home';
import { TestComponent } from '../app/test/test.component';
import {BlogComponent} from './blog/blog.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, appHome, TestComponent, BlogComponent, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {

  title = 'test';
}
