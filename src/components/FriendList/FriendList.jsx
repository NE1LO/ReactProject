import css from "./FriendList.module.css";
import { FriendsListItem } from "../FriendListItem/FriendsListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map((item) => {
        return (
          <li key={item.id} className={css.friendListItem}>
            <FriendsListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
