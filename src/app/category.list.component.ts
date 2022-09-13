import { Component } from '@angular/core';

export interface Operationsystems {
  name: string;
  ID: number;
  Description: number;
  PhoneBrand: string;
}

const CATEGORY_DATA: Operationsystems[] = [
  { ID: 1, name: 'Hydrogen', Description: 1.0079, PhoneBrand: 'H' },
  { ID: 2, name: 'Helium', Description: 4.0026, PhoneBrand: 'He' },
  { ID: 3, name: 'Lithium', Description: 6.941, PhoneBrand: 'Li' },
  { ID: 4, name: 'Beryllium', Description: 9.0122, PhoneBrand: 'Be' },
];

@Component({
  selector: 'CategoryList',
  styleUrls: ['CategoryList.css'],
  templateUrl: 'CategoryList.html',
})
export class CategoryList {
  displayedColumns: string[] = ['ID', 'name', 'Description', 'PhoneBrand'];
  dataSource = CATEGORY_DATA;
}
