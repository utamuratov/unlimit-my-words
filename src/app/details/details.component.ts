import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Word } from '../word';
import { WordService } from '../word.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
})
export class DetailsComponent {
  /**
   *
   */
  word: Word | undefined;

  /**
   *
   */
  form = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl(''),
  });

  /**
   *
   */
  constructor(private route: ActivatedRoute, private wordService: WordService) {
    const wordId = Number(route.snapshot.params['id']);
    this.word = this.wordService.getWordById(wordId);
  }

  /**
   *
   */
  submitComment() {
    this.wordService.submitComment(
      this.form.value.name ?? '',
      this.form.value.comment ?? ''
    );
  }
}
