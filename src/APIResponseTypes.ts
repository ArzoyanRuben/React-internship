export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserAPIResponse {
  data: IUser[];
}

export interface ITable {
  data: {
    disclosure_year: number;
    disclosure_date: string;
    transaction_date: string;
    owner: string;
    ticker: string;
    asset_description: string;
    type: string;
    amount: string;
    representative: string;
    district: string;
    ptr_link: string;
    cap_gains_over_200_usd: boolean;
  };
}

export type List = IUser | IAlbum | IPhoto | IPost
