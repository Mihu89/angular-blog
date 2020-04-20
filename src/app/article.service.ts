import { Article } from './models';
import { ARTICLES } from './mocks/mock-articles';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES;
    return of(articles);
  }

  getArticle(id:number): Observable<Article> {
    const articles: Article[] = ARTICLES.filter(a => a.id == id)
    return of(articles[0]);
  }
}
