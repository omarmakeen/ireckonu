import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  profiles: any;
  dataSource;
  tableColumns: string[] = ['photo', 'localid', 'email', 'name', 'phone', 'address', 'modified', 'view']
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() {
    return this.httpClient.get(environment.apiUrl + '/Data.json').subscribe((data: any[]) => {
      console.log(data);
      this.profiles = data;
      this.setDataSource();
    });
  }

  getSearchText(text: string) {
    console.log(text);
    this.applyFilter(text);
  }

  setDataSource(){
    this.dataSource = new MatTableDataSource(this.profiles);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.email.toLowerCase().includes(filter) || data.first_name.toLowerCase().includes(filter) || data.last_name.toLowerCase().includes(filter);
    }
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
