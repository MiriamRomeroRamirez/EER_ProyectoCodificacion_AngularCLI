import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
    `
    li {
      cursor: pointer
    }
    `
  ]
})
export class NavComponent implements OnInit {

  dynamicComponent: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(res => {
      console.log(res)
      this.JumpTo(res);
    })
  }

  JumpTo(section: any) {
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({behavior: "smooth"});
    }, 100);
  }

}
