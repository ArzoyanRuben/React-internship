import { List } from "../../components/List/List";
import { UsersBody } from "../../components/UsersBody/UsersBody";
import { ModalUsers } from './../../components/ModalUsers/ModalUsers';

export const Users = () => {
  const userUrl = process.env.REACT_APP_JSON_PLACEHOLDER_API + '/users';
  const postUrl = process.env.REACT_APP_JSON_PLACEHOLDER_API + '/posts';
  return (
    <List
      ListComponent={UsersBody}
      listUrl={userUrl}
      ModalComponent={ModalUsers}
      modalUrl={postUrl}
    />
  );
};
