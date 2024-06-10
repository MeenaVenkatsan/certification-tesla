export class Color{
    code!:string;
    description!: string;
    price!: number;
  
  }
  export class Config{
    id!:number;
    description!: string;
    range!: number;
    speed!: number;
    price!: number;
    
}
export class Model{
    code!:string;
    description!:string;
    colors!: Color[];

}
export class Option{
    configs!:Config[];
    towHitch!: boolean;
    yoke!: boolean;

}
export class SelectedCar{
    
    model?:Model = undefined;
    color?:Color= undefined;
    config?: Config= undefined;
    tow: boolean =false;
    yoke: boolean =false;

    notSelectedModelAndColor(): boolean
    {
        if(this.model && this.color){
            return false;
        }
        return true;
    }

    notSelectedConfig():boolean
    {
        if(this.config){
            return false;
        }
        return true;
    }

    GetTotalCost():number
    {
        var towYokeCost=1000;
        var sum=(this.color?.price ?? 0)+(this.config?.price ?? 0);
        if(this.tow) sum+=towYokeCost;
        if(this.yoke) sum+= towYokeCost;
        return sum;
    }
}