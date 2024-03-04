import css from "./friendsListItem.module.css";

export const FriendsListItem = ({ name, isOnline, avatar }) => {
  return (
    <div className={css.friendBlock}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p style={{ color: "green" }}>Online</p>
      ) : (
        <p style={{ color: "red" }}>Offline</p>
      )}
    </div>
  );
};
