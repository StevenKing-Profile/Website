import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  projects = [
    {
      title: 'WordCountTool.com', url: 'https://wordcounttool.com', asset: 'assets/WordCountTool.jpg',
      description: 'A serverless Angular 6 web application that calculates the number of words in a textarea field, frequency of each word, and can manipulate the case of each word. Uses the @ng-toolkit/universal project to pre-render HTML to improve SEO. Traffic is about 34,000 pageviews a month.'
    },
    {
      title: 'Overwatch.guide', url: 'https://overwatch.guide', asset: 'assets/OverwatchGuide.jpg',
      description: 'Made in WordPress but using a custom made template, it\'s a guide for Blizard\'s videogame, Overwatch. Continuously updated over the last 2 years, it receives ~5500 unique visitors a month according to Google Analytics. Also shows off my (lack thereof) photoshop skills!'
    }
  ]

  otherProjects = [
    { title: 'Experient Groups Website', url: 'http://experientgroup.com/', role: 'Development, UX', company: 'Experient Group', year: 2016 }
  ]
  constructor() { }

  ngOnInit() { }
}
