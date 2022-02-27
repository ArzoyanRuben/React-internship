import User from "../../components/User";
import { getUsers } from "../../API/useAPI";
import { getPosts } from "../../API/postAPI";
import Posts from "../../components/Posts/Posts";
import useFetch from "../../hooks/useFetch";
import List from "../../components/shared/List/List";

export default function Users() {
  const [users] = useFetch(null, getUsers);
  const [posts] = useFetch([], getPosts);

  return (
    <>
      {users &&  (
        <List
          listItems={users}
          modalItems={posts}
          ListComponent={User}
          ModalComponent={Posts}
        />
      )}
    </>
  );
}
