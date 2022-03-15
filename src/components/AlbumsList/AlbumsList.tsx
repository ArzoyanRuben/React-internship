import React, { FunctionComponent } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { IAlbum, IUser } from "../../APIResponseTypes";
import Album from "../Album/Album";

interface IProps {
  list: IAlbum[],
  showItems: Function,
  changeType: Function
}

const AlbumsList: FunctionComponent<IProps> = ({ list, showItems, changeType }) => {
  let users: IUser[] = useSelector((state:RootStateOrAny) => state.users);

  return (
    <>
      {users.map((user) => {
        const album: IAlbum = list.find((album) => user.id === album.userId) || {} as IAlbum
        return <Album key={album.id} item={album} showItems={showItems} changeType={changeType} />;})}
    </>
  );
}

export default React.memo(AlbumsList);