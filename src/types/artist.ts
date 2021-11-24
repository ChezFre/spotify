import { TAlbum } from "./album";

export type TArtist = {
  id: string;
  name: string;
  image: string;
  albums: TAlbum[];
};
