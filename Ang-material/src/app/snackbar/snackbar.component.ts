import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomsnackbarComponent } from '../customsnackbar/customsnackbar.component';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
openSnackBar(message:string){
  let snackBarRef=this.snackBar.open(message)

  snackBarRef.afterDismissed().subscribe(()=>{
    console.log("SnackBar dismissed")
  })
  snackBarRef.onAction().subscribe(()=>{
    console.log("SnackBar triggered")
  })
}
openSnackBar1(message:string,action:any){
  this.snackBar.open(message,action)
}
openSnackBar2(message:string,action:any){
  this.snackBar.open(message,action,{duration:1000})
}
openSnackBar3(message:string,action:any){
  this.snackBar.openFromComponent(CustomsnackbarComponent,{duration:2000})
}
}
