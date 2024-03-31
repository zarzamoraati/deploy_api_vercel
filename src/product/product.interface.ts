export interface Product{
    name:string,
    price:number
}

export interface ProductWithId extends Product{
    _id:string
}