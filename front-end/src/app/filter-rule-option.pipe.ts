import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRuleOption'
})

export class FilterRuleOptionPipe implements PipeTransform {

  public transform(items: any, input: string): any {
    const filteredItems = [];
    items.forEach((item) => {
      if(item.name.toLowerCase().includes(input)) {
        filteredItems.push(item);
      }
    });

    return filteredItems;
  }
}
