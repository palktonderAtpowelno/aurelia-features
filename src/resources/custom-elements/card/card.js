import {inject,bindable} from 'aurelia-framework';

@inject(Element)
export class Card {
  @bindable user = null;

  constructor(element){
    this.element = element;
  }

  cardClicked(){
    let e = new CustomEvent('card-clicked', {
      detail: this.user
    });
    this.element.dispatchEvent(e);
  }
}