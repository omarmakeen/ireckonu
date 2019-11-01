import { Pipe, PipeTransform, Injector } from '@angular/core';
import { EmptyPipe } from '../empty/empty.pipe';
import { PipeResolver } from '@angular/compiler';

@Pipe({
  name: 'dynamicPipe',
})
export class DynamicPipePipe implements PipeTransform {

  pipesMap = {
    empty: EmptyPipe
  }
  // pipesList = [
  //   EmptyPipe
  // ];
  // pipesMap: any;
  // pipeResolver: any;

  public constructor(private injector: Injector) {

    // this.pipeResolver = new PipeResolver();
    // this.pipesMap = this.pipesList.reduce((pipesMap, pipeClass) => {
    //   const pipeName = this.pipeResolver.resolve(pipeClass, true).name;
    //   this.pipesMap[pipeName] = pipeClass;
    //   return pipesMap;
    // }, {});
  }

  transform(value: any, pipeToken: any, pipeArgs: any[]): any {
      if (!pipeToken) {
          return value;
      }
      else {
          let pipe = this.injector.get(new this.pipesMap[pipeToken].constructor.name);
          return pipe.transform(value, ...pipeArgs);
      }
  }
}

