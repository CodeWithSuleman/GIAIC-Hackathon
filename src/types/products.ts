export interface Products{
    _id : string,
    productName : string,
    type : "product",
    image? :{
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price : number,
    description : string,
    category:string,
    color:string,
    slug:{
        _type:"slug";
        current: string;
    }
    inventory:number;
}