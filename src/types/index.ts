export type TGuitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

// export type TCartItem = Pick<TGuitar, 'id' | 'name' | 'price'> & {
//   quantity: number;
// };

// export type TCartItem = Omit<TGuitar, 'id' | 'name' | 'price'> & {
//   quantity: number;
// };

export type TCartItem = TGuitar & {
  quantity: number;
};

// export interface TCartItem extends TGuitar {
//   quantity: number;
// }

// export type TGuitarID = Pick<TGuitar, 'id'>;
// export type TGuitarID = TGuitar['id']
