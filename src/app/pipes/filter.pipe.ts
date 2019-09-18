import { Pipe, PipeTransform } from '@angular/core';
import { filter } from '../../../node_modules/@types/minimatch';


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(users: Array<any>, filterObject: {searchText: any , filterType: any }): any[] {
    if (!users) {return []; }
    if (filterObject.searchText === undefined || filterObject.filterType === undefined) {return users; }
    filterObject.searchText = filterObject.searchText.toString().toLowerCase();
    filterObject.filterType = filterObject.filterType.toString().toLowerCase();
    console.log(filterObject);
    console.log(filterObject.filterType);

    return users.filter( user => {
        if (filterObject.filterType === 'all') {
          return  user.firstname.toLowerCase().includes(filterObject.searchText) ||
          user.lastname.toLowerCase().includes(filterObject.searchText) ||
          user.designation.toLowerCase().includes(filterObject.searchText) ||
          user.team.toLowerCase().includes(filterObject.searchText);
        }
        if (filterObject.filterType === 'name') {
          return user.firstname.toLowerCase().includes(filterObject.searchText) ||
           user.lastname.toLowerCase().includes(filterObject.searchText);
        }
        if (filterObject.filterType === 'Designation') {
          return user.designation.toLowerCase().includes(filterObject.searchText);
        }
        if (filterObject.filterType === 'Team') {
          return user.team.toLowerCase().includes(filterObject.searchText);
        }
    });

   }
}
