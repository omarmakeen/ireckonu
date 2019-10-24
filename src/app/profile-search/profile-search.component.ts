import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { PAGE_SIZE_OPTIONS, PROFILE_TABLE_COLUMN } from 'src/app/shared/constants/defines';
import { config } from 'src/config/pages-config';
import { SpinnerService } from '../shared/components/spinner/spinner.service';


@Component({
  selector: 'app-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.sass']
})
export class SearchComponent implements OnInit {

  private profiles: any;
  private dataSource = new MatTableDataSource<any>([]);
  private tableColumns: string[] = PROFILE_TABLE_COLUMN
  private paginator: MatPaginator;
  private sort: MatSort;
  pageSizeOptions = PAGE_SIZE_OPTIONS;

  @ViewChild(MatSort, { static: false }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator, { static: false }) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.email.toLowerCase().includes(filter) || data.first_name.toLowerCase().includes(filter) || data.last_name.toLowerCase().includes(filter);
    }
  }

  constructor(private profileService: ProfileService, private router: Router, public spinnerService: SpinnerService) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() {
    if (!this.profileService.profiles) {
      return this.profileService.getProfiles().subscribe((data: any[]) => {
        this.profiles = data;
        this.dataSource = new MatTableDataSource(this.profiles);
        this.profileService.profiles = this.profiles;
      });
    } else {
      this.profiles = this.profileService.profiles;
      this.dataSource = new MatTableDataSource(this.profiles);
    }
  }

  getSearchText(text: string) {
    console.log(text);
    this.applyFilter(text);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openProfile(profile: any) {
    this.router.navigate([config.profileDetails.route], { state: { profile: profile } });
  }

}

export class ProfilesDataSource extends DataSource<any> {
  constructor(private profiles: any) { super() }
  connect(): Observable<any[]> {
    return of(this.profiles);
  }
  disconnect() { }
}
