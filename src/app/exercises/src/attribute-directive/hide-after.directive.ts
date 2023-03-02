import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

class HideAfterContext {
  public get $implicit() {
    return this.HideAfter;
  }
  public HideAfter = 0;
  public counter = 0;
  public HideAfterThen = 1000;
}

@Directive({
  selector: '[HideAfter]',
})
export class HideAfterDirective implements OnInit {
  @Input('HideAfter')
  set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.HideAfter = this.context.counter = this._delay / 1000;
  }
  private _delay = 0;

  @Input('HideAfterThen')
  placeholder: TemplateRef<any> | null = null;

  private context = new HideAfterContext();

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template, this.context);
    const intervalId = setInterval(() => {
      this.context.counter--;
    }, 1000);
    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.placeholder) {
        this.viewContainerRef.createEmbeddedView(
          this.placeholder,
          this.context
        );
      }
      clearInterval(intervalId);
    }, this._delay);
  }
}
