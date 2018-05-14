import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {DialogService} from '../dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @ViewChild("marker", {read: ViewContainerRef}) marker: ViewContainerRef;

  constructor(dialogService: DialogService, private cfr: ComponentFactoryResolver) {
    dialogService.registerComponent(this);
  }

  ngOnInit() {
    console.log("marker", this.marker);
  }

  show<T>(componentType: Type<T>): T {
    const factory = this.cfr.resolveComponentFactory(componentType);

    const compRef =  this.marker.createComponent(factory);
    return <T>compRef.instance;
  }
}
