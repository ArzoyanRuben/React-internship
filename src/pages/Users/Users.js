import UsersList from "../../components/UsersList/UsersList";
import { getItems } from "../../config/api";
import Posts from "../../components/Posts/Posts";
import List from "../../components/shared/List/List";
import usersSlice from "../../store/usersSlice";

export default function Users() {
  const usersURL = `${process.env.REACT_APP_LIST_URL}/users`
  return (
    <List
      listItemsGetter={getItems(usersURL)}
      ListComponent={UsersList}
      action={usersSlice.actions.add}
    />
  );
}