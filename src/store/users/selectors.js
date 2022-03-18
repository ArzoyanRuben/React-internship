import { createSelector } from "reselect";

const globalSelector = (state) => state.users;

const usersData = createSelector([globalSelector], (users) => users.usersData);

export default { usersData };
