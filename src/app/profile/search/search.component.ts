import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  private profiles: any;
  private dataSource = new MatTableDataSource<any>([]);
  private isLoading: boolean;
  private tableColumns: string[] = ['photo', 'localid', 'email', 'name', 'phone', 'address', 'modified', 'view']
  private paginator: MatPaginator;
  private sort: MatSort;

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

  constructor(private httpClient: HttpClient, private profileService: ProfileService) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() {
    this.isLoading = true;
    return this.profileService.getProfiles().subscribe((data: any[]) => {
      console.log(data);
      this.profiles = data;
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(this.profiles);
    });

    // return this.httpClient.get('https://httpstat.us/400').subscribe((data: any[]) => {
    //   console.log(data);
    //   this.profiles = data;
    //   this.isLoading = false;
    //   this.dataSource = new MatTableDataSource(this.profiles);
    // });
  }

  getSearchText(text: string) {
    console.log(text);
    this.applyFilter(text);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export class ProfilesDataSource extends DataSource<any> {
  constructor(private profiles: any) { super() }
  connect(): Observable<any[]> {
    return of(this.profiles);
  }
  disconnect() { }
}
