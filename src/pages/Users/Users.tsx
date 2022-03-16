import UsersList from "../../components/UsersList/UsersList";
import Lists from "../../components/shared/Lists/Lists";
import usersSlice from "../../store/usersSlice";
import { FunctionComponent } from "react";

const Users:FunctionComponent = () => {
  const usersURL:string = `${process.env.REACT_APP_LIST_URL}/users`;

  return (
    <Lists
      listItemsGetter={usersURL}
      ListComponent={UsersList}
      action={usersSlice.actions.add}
      list="users"
    />
  );
}

export default Users