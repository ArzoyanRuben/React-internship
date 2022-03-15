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

export type List = IUser | IAlbum | IPhoto | IPost;