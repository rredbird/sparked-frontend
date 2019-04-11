import { tableDataFormatter } from '../interfaces/tableDataFormatter';
import { OrderDto } from '../shared/dto/orderdto.type';
import { AppComponent } from '../app.component';

export class OrderFormatter implements tableDataFormatter<OrderDto> {
    // onClickDelegate: Function;
    // onClick(component : AppComponent, row: OrderDto, data: OrderDto[]) {
    //     this.onClickDelegate(component, row);
    //     return;
    // }
    public columnArray: String[] = ["Title","Index", "Order Status"];
    public column(data: OrderDto, index: number) : any {
        switch(index) {
            case 0: return data.name;
            case 1: return data.id;
            case 2: return data.status;
        }
    }
    public columnDisplayInformation(index: number) : String {
        switch(index) {
            case 0: return "String";
            case 1: return "String";
            case 2: return "String";
        }
    }
}
