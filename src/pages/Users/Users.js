import UsersList from "../../components/UsersList/UsersList";
import { getUsers } from "../../API/useAPI";
import { getPosts } from "../../API/postAPI";
import Posts from "../../components/Posts/Posts";
import List from "../../components/shared/List/List";

export default function Users() {
  return (
    <List
      listItemsGetter={getUsers}
      modalItemsGetter={getPosts}
      ListComponent={UsersList}
      ModalComponent={Posts}
    />
  );
}
