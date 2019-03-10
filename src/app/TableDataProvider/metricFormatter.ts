import { tableDataFormatter } from '../interfaces/tableDataFormatter';
import { MetricDto } from '../shared/dto/metricdto.type';
import { AppComponent } from '../app.component';

export class MetricFormatter implements tableDataFormatter<MetricDto> {
    // onClickDelegate: Function;
    // onClick(component : AppComponent, row: MetricDto, data: MetricDto[]) {
    //     if(row.selected == true) {
    //         row.selected = false;
    //         return;
    //     }
    //     for(let r of data) {
    //         r.selected = false;
    //     }
    //     row.selected = true;
    // }
    public columnArray: String[] = ["ID","Higher_Value_Better"];
    public column(data: MetricDto, index: number) : any {
        switch(index) {
            case 0: return data.id;
            case 1: 
                console.log(data); 
                console.log(data.highValueBetter); 
                console.log("" + data.highValueBetter); 
                return data.highValueBetter;
        }
    }
    
    public columnDisplayInformation(index: number) : String {
        switch(index) {
            case 0: return "String";
            case 1: return "Boolean";
        }
    }
}