import { Component } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  /**
   *
   */
  words: Word[];

  /**
   *
   */
  filteredWords: Word[];

  /**
   *
   */
  constructor(private wordService: WordService) {
    this.words = wordService.getAllWords();
    this.filteredWords = this.words;
  }

  /**
   *
   * @param text
   */
  filterWords(text: string) {
    if (!text) {
      this.filteredWords = this.words;
      return;
    }

    this.filteredWords = this.words.filter((word) =>
      word.newWord.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
  }
}
