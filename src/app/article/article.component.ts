import { ArticleService } from './../article.service';
import { Article } from './../models/article.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();
  constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.articleService.getArticle(id)
        .subscribe(article => {
          if (article === undefined) {
            this.router.navigateByUrl('404');
            return;
          }
          this.article = article;
          console.log(this.article);
        });
    });
  }

}
