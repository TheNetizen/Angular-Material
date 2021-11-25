import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
openDialog(){
let dialogRef=this.dialog.open(DialogExampleComponent,{data:{name:'Harshita'}})

dialogRef.afterClosed().subscribe(result=>{
  console.log(`dialog closed: ${result}`)
})
}
}
