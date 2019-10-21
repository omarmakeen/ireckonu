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
import { NotificationMessageComponent } from './components/notification-message/notification-message.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';


@NgModule({
  declarations: [HeaderComponent, SearchBarComponent, PersonalTitlePipe, NotificationMessageComponent, ErrorDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    NotificationMessageComponent,
    PersonalTitlePipe,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    TranslateModule 
  ],
  entryComponents: [ErrorDialogComponent]
})
export class SharedModule { }
