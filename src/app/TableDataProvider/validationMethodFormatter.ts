import { tableDataFormatter } from '../interfaces/tableDataFormatter';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type';
import { AppComponent } from '../app.component';

export class ValidationMethodFormatter implements tableDataFormatter<ValidationMethodDto> {
    // onClickDelegate: Function;
    // onClick(component : AppComponent, row: ValidationMethodDto, data: ValidationMethodDto[]) {
    //     if(row.selected == true) {
    //         row.selected = false;
    //         return;
    //     }
    //     for(let r of data) {
    //         r.selected = false;
    //     }
    //     row.selected = true;
    // }
    public columnArray: String[] = ["ID","Name"];
    public column(data: ValidationMethodDto, index: number) : any {
        switch(index) {
            case 0: return data.id;
            case 1: return data.name;
        }
    }

    public columnDisplayInformation(index: number) : String {
        switch(index) {
            case 0: return "String";
            case 1: return "String";
        }
    }
}