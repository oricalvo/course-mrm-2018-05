import {Injectable, Type} from '@angular/core';
import {DialogComponent} from './dialog/dialog.component';

@Injectable()
export class DialogService {
  private comp: DialogComponent;

  constructor() { }

  show<T>(componentType: Type<T>): T {
    return this.comp.show(componentType);
  }

  registerComponent(comp: DialogComponent) {
    this.comp = comp;
  }
}
