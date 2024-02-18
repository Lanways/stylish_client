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

export type SkusType = {
  color: string;
  createdAt: string;
  id: number;
  inventoryQuantity: number;
  price: number;
  productId: number;
  size: string;
  skuCode: string;
  updatedAt: string;
};

export type ItemDetail = {
  Skus: SkusType[];
  additionalImage: string;
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  image: string;
  name: string;
  price: string;
  updatedAt: string;
};
