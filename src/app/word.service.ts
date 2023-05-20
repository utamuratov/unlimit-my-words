import { Injectable } from '@angular/core';
import { Word } from './word';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  words: Word[] = [
    {
      id: 1,
      newWord: 'book',
      translation: 'kitob',
      example: 'I am reading an interesting book.',
      photo: './assets/book.jpg',
    },
    {
      id: 2,
      newWord: 'car',
      translation: 'mashina',
      example: 'I usually go to work by car.',
      photo: './assets/car.jpg',
    },
    {
      id: 3,
      newWord: 'home',
      translation: 'uy',
      example: 'Now i am at home.',
      photo: './assets/home.webp',
    },
    {
      id: 4,
      newWord: 'programmer',
      translation: 'dasturchi',
      example: 'I am going to a professional programmer in the future.',
      photo: './assets/programmer.webp',
    },
    {
      id: 5,
      newWord: 'ball',
      translation: 'koptok',
      example: 'I am playing a ball with my friends.',
      photo: './assets/ball.jpg',
    },
    {
      id: 6,
      newWord: 'friend',
      translation: 'do`st',
      example: 'I have many firends.',
      photo: './assets/friend.jpg',
    },
    {
      id: 7,
      newWord: 'work',
      translation: 'ish',
      example: 'I usually go to work by car.',
      photo: './assets/work.jpg',
    },
    {
      id: 8,
      newWord: 'family',
      translation: 'oila',
      example: 'I love my family.',
      photo: './assets/family.jpg',
    },
    {
      id: 9,
      newWord: 'money',
      translation: 'pul',
      example:
        'If I have much money, I will help all poor people in the world.',
      photo: './assets/money.jpg',
    },
    {
      id: 10,
      newWord: 'dream',
      translation: 'orzu',
      example: 'My dream is being a doctor.',
      photo: './assets/dream.webp',
    },
  ];

  getAllWords() {
    return this.words;
  }

  getWordById(id: number) {
    return this.words.find((w) => w.id === id);
  }

  submitComment(name: string, comment: string) {
    alert(`${name}: ${comment}`);
  }
}
