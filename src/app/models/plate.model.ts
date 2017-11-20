export class Plate{
  constructor(
    public id: number,
    public restaurant_id: number,
    public price: Number,
    public name: string, 
    public description: string     
  ){}
}