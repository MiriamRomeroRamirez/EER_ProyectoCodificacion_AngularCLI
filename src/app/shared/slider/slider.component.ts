import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['../../scss/custom.css'] , 
  styles: [
  ]
})
export class SliderComponent implements OnInit {


  mymage: string = 'https://i.pinimg.com/564x/b4/48/8f/b4488f29f81cde4d0da04760fd009d77.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
