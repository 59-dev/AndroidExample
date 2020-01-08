import { Directive, ElementRef } from "@angular/core";
import { Label } from "@nativescript/core/ui/label";
import { Color } from "tns-core-modules/color/color";
@Directive({
  selector: "[nsLabel]"
})
export class LabelDirective {

  constructor(el: ElementRef) {
		const tf = <Label>el.nativeElement;
		tf.style.color = new Color("red");
  }

}
