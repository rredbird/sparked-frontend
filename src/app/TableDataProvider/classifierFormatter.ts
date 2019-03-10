import { tableDataFormatter } from '../interfaces/tableDataFormatter';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { AppComponent } from '../app.component';

export class ClassifierFormatter implements tableDataFormatter<ClassifierDto> {
    // onClickDelegate: Function;
    // onClick(component : AppComponent, row: ClassifierDto, data: ClassifierDto[]) {
    //     row.selected = !row.selected;
    // }

    public columnArray: String[] = ["ID", "Title","Description"];
    public column(data: ClassifierDto, index: number) : any {
        switch(index) {
            case 0: return data.id;
            case 1: return data.name;
            case 2: return data.description;
        }
    }

    public columnDisplayInformation(index: number) : String {
        switch(index) {
            case 0: return "String";
            case 1: return "String";
            case 2: return "String";
            case 3: return "Multiselect";
        }
    }
}