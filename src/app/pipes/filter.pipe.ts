import { Pipe, PipeTransform } from '@angular/core';
import { FilterObject } from '../models/filterObject';


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(users, filterObject: FilterObject): any[] {
    if (!users) {return []; }
    if (filterObject.searchInput === undefined || filterObject.filterType === undefined) {return users; }
    filterObject.searchInput = filterObject.searchInput.toString().toLowerCase();
    filterObject.filterType = filterObject.filterType.toString().toLowerCase();
    console.log(filterObject);
    console.log(filterObject.filterType);

    return users.filter( user => {
        if (filterObject.filterType === 'all') {
          return  user.firstname.toLowerCase().includes(filterObject.searchInput) ||
          user.lastname.toLowerCase().includes(filterObject.searchInput) ||
          user.designation.toLowerCase().includes(filterObject.searchInput) ||
          user.team.toLowerCase().includes(filterObject.searchInput);
        }
        if (filterObject.filterType === 'name') {
          return user.firstname.toLowerCase().includes(filterObject.searchInput) ||
           user.lastname.toLowerCase().includes(filterObject.searchInput);
        }
        if (filterObject.filterType === 'Designation') {
          return user.designation.toLowerCase().includes(filterObject.searchInput);
        }
        if (filterObject.filterType === 'Team') {
          return user.team.toLowerCase().includes(filterObject.searchInput);
        }
    });

   }
}
