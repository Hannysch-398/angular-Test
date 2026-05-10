import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  imports: [],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.css',
  standalone: true,
})
export class TextBoxComponent {
  @Input() text!: string;
}
