export interface Product{
  name:string;
  tumbnail:string;
  gambar:string;
  deskripsi:string;
  kategory:string;
  price:number;
  jumlah:number;
  published:Date;
}

export interface Category {
    _id:       string;
    name:      string;
    createdAt: string;
    updatedAt: string;
    __v:       number;
}
