import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './heroes/hero';
import { Heroes } from './heroes/mock-hero';
import { MessageService } from './messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(Heroes);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);    
    return of(Heroes.find(hero => hero.id === id));
  }
}
