export type Product = {
  id: number;
  name: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  sizeOptions: string;
  quantity: number;
  description: string;
  additionalImage: string;
  categoryId: number;
};

export type Category = {
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
}[];

export type ProductParam = {
  page: number | undefined;
  limit: string;
  categoryId: string;
};
