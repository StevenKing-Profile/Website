import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  websites = [
    { name: 'Email', url: 'mailto:career@stevenking.net' },
    { name: 'Resume', url: 'https://github.com/StevenKing-Profile/Resume/blob/master/2019_Steven_King_Resume.pdf'},
    { name: 'Github', url: 'https://github.com/StevenKing-Profile' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/steven-king-832566186/' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
