import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TextBoxComponent } from '../text-box/text-box.component';

@Component({
  selector: 'appHome',
  templateUrl: 'home.html',
  styleUrl: 'home.css',
  imports: [UpperCasePipe, TextBoxComponent],
  standalone: true,
})
export class appHome {
  title = 'Home wird angezeigt';
  showText = 'false';


  content = [
    ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit excepturi a ipsa in earum iste itaque dolores adipisci, deleniti modi,magni, ut laborum asperiores temporibus numquam fugit accusamus rerum.',
    ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit excepturi a ipsa in earum iste itaque dolores adipisci, deleniti modi,magni, ut laborum asperiores temporibus numquam fugit accusamus rerum.',
    ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit excepturi a ipsa in earum iste itaque dolores adipisci, deleniti modi,magni, ut laborum asperiores temporibus numquam fugit accusamus rerum.',
    ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit excepturi a ipsa in earum iste itaque dolores adipisci, deleniti modi,magni, ut laborum asperiores temporibus numquam fugit accusamus rerum.',
  ];

  trackByText(index: number, item: string) {
    return index;
  }


  toggle = false;
  showBool():void{
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
}
