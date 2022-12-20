import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nao-info',
  templateUrl: './nao-info.component.html',
  styles: [
  ]
})
export class NAOInfoComponent implements OnInit {

  NAOimage1: string = '/src/assets/ImagenesDefinitivas/NAOROBOT/robot1.jpg';

  constructor() { } 

  ngOnInit(): void {
  }

}
