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
import { MatDialogModule, MatTabsModule, MatIconModule } from '@angular/material';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [HeaderComponent, SearchBarComponent, PersonalTitlePipe, NotificationMessageComponent, ErrorDialogComponent, SpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SearchBarComponent,
    NotificationMessageComponent,
    PersonalTitlePipe,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    TranslateModule 
  ],
  entryComponents: [ErrorDialogComponent]
})
export class SharedModule { }