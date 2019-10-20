import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { PersonalTitlePipe } from './pipes/personal-title/personal-title.pipe';


@NgModule({
  declarations: [HeaderComponent, SearchBarComponent, PersonalTitlePipe],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule 
    
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    PersonalTitlePipe,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ]
})
export class SharedModule { }
