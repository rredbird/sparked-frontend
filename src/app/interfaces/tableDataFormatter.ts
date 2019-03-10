import { AppComponent } from '../app.component';

export interface tableDataFormatter<T> {
    columnDisplayInformation(index : number) : String;
    column(data: T, index : number) : any;
    columnArray : String[];
    // onClick(component : AppComponent, row : T, data : T[]);

    // onClickDelegate : Function;
}