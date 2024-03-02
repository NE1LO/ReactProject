import css from "./friendList.module.css";
import { FriendsListItem } from "../FriendsListItem/FriendsListItesm";

export const FriendList = ({ friends }) => {
  return <FriendsListItem friends={friends}></FriendsListItem>;
};
