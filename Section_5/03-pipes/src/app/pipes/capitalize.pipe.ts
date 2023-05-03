import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {
    value = value.toLocaleLowerCase();
    let words = value.split(' ');

    if (all) words = words.map(word => word[0].toUpperCase() + word.substring(1));
    else words[0] = words[0][0].toLocaleUpperCase() + words[0].substring(1);

    return words.join(' ');
  }
}
