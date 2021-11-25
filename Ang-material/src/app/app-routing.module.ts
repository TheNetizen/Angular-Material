import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GeneralMaterialComponent } from './general-material/general-material.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { InputComponent } from './input/input.component';
import { ListcompComponent } from './listcomp/listcomp.component';
import { MenucompComponent } from './menucomp/menucomp.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';



const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'generalWork',component:GeneralMaterialComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'menu',component:MenucompComponent},
  {path:'list',component:ListcompComponent},
  {path:'gridlist',component:GridListComponent},
  {path:'expansionPanel',component:ExpansionPanelComponent},
  {path:'card',component:CardComponent},
  {path:'tab',component:TabComponent},
  {path:'stepper',component:StepperComponent},
  {path:'input',component:InputComponent},
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'check',component:CheckboxComponent},
  {path:'snackbar',component:SnackbarComponent},
  {path:'dialog',component:DialogComponent},
  {path:'table',component:TableComponent},
  {path:'virtualScrolling',component:VirtualScrollingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
