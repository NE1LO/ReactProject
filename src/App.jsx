import "./App.css";
import user from "./userData.json";
import friends from "./friends.json";
import { Profile } from "./components/Profile";
import { FriendList } from "./components/Friends/FriendsList";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        avatar={user.avatar}
      />

      <FriendList friends={friends} />
    </>
  );
}

export default App;
