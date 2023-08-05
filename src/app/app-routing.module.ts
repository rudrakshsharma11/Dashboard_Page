import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomComponent } from './bottom/bottom.component';
import { CardComponent } from './card/card.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'table-list',component:BadgeComponent},
  {path:'bottom',component:BottomComponent},
  {path:'notification',component:CardComponent},
  {path:'bottom-sheet',component:BottomSheetComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
