import { List } from "../../components/List/List";
import { UsersBody } from "../../components/UsersBody/UsersBody";
import { postUrl, userUrl } from "../../helpers/API";
import { ModalUsers } from './../../components/ModalUsers/ModalUsers';

export const Users = () => {
  return (
    <List
      ListComponent={UsersBody}
      listUrl={userUrl}
      ModalComponent={ModalUsers}
      modalUrl={postUrl}
    />
  );
};
