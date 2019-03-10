import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  public searchText : String;

  public searchresults : Array<String>;
  private registeredValues : Array<{'key': String, 'value': Object}>; 
  private selected : number = -1;
  private maximumNumberOfSearchresults : number = 5;

  constructor() {
    this.registeredValues = new Array<{'key': String, 'value': Object}>();
    this.searchresults = new Array<String>();
  }

  public search() : void {
    this.reset();
    if(this.searchText.length > -1) {
      this.registeredValues.forEach(element => {
        if(this.searchresults.length >= this.maximumNumberOfSearchresults) { 
          return;
        }
        if(element.key.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())) {
          this.searchresults.push(element.key);
        }
      });
    }
  }

  public reset() : void {
    this.searchresults = new Array<String>();
    this.selected = -1;
  }

  public up() : void {
    if(this.selected == -1) {
      this.selected = Math.min(this.searchresults.length - 1, this.maximumNumberOfSearchresults);
    } else {
      if(this.selected == 0) {
        this.selected = this.searchresults.length - 1;
      } else {
        this.selected = this.selected - 1;
      }
    }
  }

  public enter() : void {

  }

  public down() : void {
    if(this.selected == -1) {
      this.selected = 0;
    } else {
      this.selected = this.selected + 1;
    }
    if (this.selected > 4 || this.selected > (this.searchresults.length - 1)) {
      this.selected = 0;
    }
  }

  public registerValues(values : Array<{'key': String, 'value': Object}>) : void {
    values.forEach(element => {
      this.registeredValues.push(element);
    });
  }

  public registerValue(value : {'key': String, 'value': Object}) : void {
    this.registeredValues.push(value);
  }
}
