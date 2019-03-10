import { tableDataFormatter } from '../interfaces/tableDataFormatter';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { AppComponent } from '../app.component';

export class DatasetFormatter implements tableDataFormatter<DatasetDto> {
    // onClickDelegate: Function;
    // onClick(component : AppComponent, row: DatasetDto, data: DatasetDto[]) {
    //     if(row.selected == true) {
    //         row.selected = false;
    //         return;
    //     }
    //     for(let r of data) {
    //         r.selected = false;
    //     }
    //     row.selected = true;
    // }
    public columnArray: String[] = ["Title","Description"];
    public column(data: DatasetDto, index: number) : any {
        switch(index) {
            case 0: return data.id;
            case 1: return data.description;
        }
    }

    public columnDisplayInformation(index: number) : String {
        switch(index) {
            case 0: return "String";
            case 1: return "String";
        }
    }
}