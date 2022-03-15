import UsersList from "../../components/UsersList/UsersList";
import Lists from "../../components/shared/Lists/Lists";
import usersSlice from "../../store/usersSlice";

export default function Users() {
  const usersURL = `${process.env.REACT_APP_LIST_URL}/users`;

  return (
    <Lists
      listItemsGetter={usersURL}
      ListComponent={UsersList}
      action={usersSlice.actions.add}
    />
  );
}
