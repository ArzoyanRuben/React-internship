import User from "../../components/User";
import { getUsers } from "../../API/useAPI";
import { getPosts } from "../../API/postAPI";
import Posts from "../../components/Posts/Posts";
import List from "../../components/shared/List/List";

export default function Users() {
  return (
    <List
      listItemsGetter={getUsers}
      modalItemsGetter={getPosts}
      ListComponent={User}
      ModalComponent={Posts}
    />
  );
}
