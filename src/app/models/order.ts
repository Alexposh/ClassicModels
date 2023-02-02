export interface Order{
    orderNumber: number,
    OrderDate: Date,
    requiredDate: Date,
    shippedDate: Date, 
    status: string,
    comments: string,
    customerNumber:number    
}