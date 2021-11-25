import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.css']
})
export class VirtualScrollingComponent implements OnInit {
  b:Array<Number>=[]
  constructor() { 
    let i:number
    for( i=1;i<=1000;i++){
       this.b.push(i)
    }
  }
   
  ngOnInit(): void {
  }

}
