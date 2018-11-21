import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {

  transform(items: any, field?: any ): Array<any> {
    if (Array.isArray(items)) {
      return items;
    }

    return items.sort((item, nextItem) => {
      const result = item[field] >= nextItem[field];

      if (result) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
