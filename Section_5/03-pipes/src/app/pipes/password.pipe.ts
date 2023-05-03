import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active: boolean): string {
    let psw = '';

    if (active) {
      for (let c of value) psw += '*';
    } else {
      psw = value;
    }

    return psw;
  }
}
