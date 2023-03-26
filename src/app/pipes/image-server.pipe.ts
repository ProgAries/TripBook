import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageServer'
})
export class ImageServerPipe implements PipeTransform {

  transform(value: String): string {
    if(value)
      return 'https://localhost:7104/Images/' + value;
    else
      return  '/assets/tourist.png'
  }

}
