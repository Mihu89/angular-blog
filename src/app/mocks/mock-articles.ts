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
        imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fskywell.software%2Fwp-content%2Fuploads%2F2019%2F04%2FAngular-8-1024x542.jpg&imgrefurl=https%3A%2F%2Fskywell.software%2Fblog%2Fangular-8-what-features-and-updates-we-can-expect%2F&tbnid=Wr2hvgjcMI7CUM&vet=12ahUKEwjbhLbcg_XoAhVP16QKHVbgDMMQMygCegUIARDtAQ..i&docid=AHZLsIfpC2TGSM&w=1024&h=542&q=angular%20&client=firefox-b-d&ved=2ahUKEwjbhLbcg_XoAhVP16QKHVbgDMMQMygCegUIARDtAQ'
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