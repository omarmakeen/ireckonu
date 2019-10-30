import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { NotificationMessageComponent } from './components/notification-message/notification-message.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule, MatTabsModule, MatIconModule, MatGridListModule } from '@angular/material';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardComponent } from './components/card/card.component';
import { TelephoneCodePipe } from './pipes/telephone-code/telephone-code.pipe';
import { EmptyPipe } from './pipes/empty/empty.pipe';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProfileService } from './services/profile-service/profile.service';

@NgModule({
  declarations: [HeaderComponent, SearchBarComponent, NotificationMessageComponent, ErrorDialogComponent, SpinnerComponent, CardComponent, TelephoneCodePipe, EmptyPipe, SideBarComponent],
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
    MatCardModule,
    MatGridListModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    SpinnerComponent,
    SearchBarComponent,
    NotificationMessageComponent,
    CardComponent,
    TelephoneCodePipe,
    EmptyPipe,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    TranslateModule 
  ],
  providers: [],
  entryComponents: [ErrorDialogComponent]
})
export class SharedModule { }
