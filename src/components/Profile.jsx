import css from "./profile.module.css";

console.log(css);

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.profileInfo}>
        <img className={css.profileAvatar} src={avatar} alt="User avatar" />
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
