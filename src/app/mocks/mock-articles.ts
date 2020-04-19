import { Article } from '../models';

export const ARTICLES: Article[] = [
    {
        id:1,
        title: 'First Article Starter',
        content: 'Some info about it, UI frameworks like Angular etc',
        description: 'It & Science',
        key: 'angular',
        date: new Date(),
        author: 'Mihail Coscodan',
        imageUrl: 'https://mdbootstrap.com/wp-content/uploads/2019/02/main.jpg'
    },
    {
        id:2,
        title: 'Second Article',
        content: 'Angular 9 Features and other interesting stuff. lorem',
        description: 'It & Science',
        key: 'angular, angular9',
        date: new Date(),
        author: 'Mihail Coscodan',
        imageUrl: 'https://angular.io/generated/images/marketing/home/speed-performance.svg'
    }
];