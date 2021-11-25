import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { GeneralMaterialComponent } from './general-material/general-material.component';
import { FormsModule } from '@angular/forms';
import { MenucompComponent } from './menucomp/menucomp.component';
import { ListcompComponent } from './listcomp/listcomp.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { CustomsnackbarComponent } from './customsnackbar/customsnackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { TableComponent } from './table/table.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';
@NgModule({
  declarations: [
    
    AppComponent,
    SidenavComponent,
    GeneralMaterialComponent,
    MenucompComponent,
    ListcompComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardComponent,
    TabComponent,
    StepperComponent,
    InputComponent,
    AutocompleteComponent,
    CheckboxComponent,
    SnackbarComponent,
    CustomsnackbarComponent,
    DialogComponent,
    DialogExampleComponent,
    TableComponent,
    VirtualScrollingComponent
  ],
  entryComponents:[CustomsnackbarComponent,DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
