import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TextService {

  private texts: WritableSignal<string[]> = signal<string[]>([
    ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit excepturi a ipsa in earum iste itaque dolores adipisci, deleniti modi,magni, ut laborum asperiores temporibus numquam fugit accusamus rerum.',
    ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit excepturi a ipsa in earum iste itaque dolores adipisci, deleniti modi,magni, ut laborum asperiores temporibus numquam fugit accusamus rerum.',
    ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit excepturi a ipsa in earum iste itaque dolores adipisci, deleniti modi,magni, ut laborum asperiores temporibus numquam fugit accusamus rerum.',
    ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus velit excepturi a ipsa in earum iste itaque dolores adipisci, deleniti modi,magni, ut laborum asperiores temporibus numquam fugit accusamus rerum.',
  ]);

  getAllTexts() : Signal<string[]> {
    return this.texts.asReadonly();
  }
}
