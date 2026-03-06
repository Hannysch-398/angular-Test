import { UpperCasePipe } from '@angular/common';
import {Component, inject} from '@angular/core';
import { TextBoxComponent } from '../text-box/text-box.component';
import {TextService} from '../services/text.service';

@Component({
  selector: 'appHome',
  templateUrl: 'home.html',
  styleUrl: 'home.css',
  imports: [UpperCasePipe, TextBoxComponent],
  standalone: true,
})
export class appHome {
  title = 'Home wird angezeigt';
  showText = true;

  textService = inject(TextService);

  texts = this.textService.getAllTexts();


  toggle = true;
  showBool():void{
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
  showTexts():void{
    this.showText = !this.showText;
  }
}
