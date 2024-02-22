import "./App.css";
import user from "./userData.json";
import { Profile } from "./components/Profile";

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
      {Profile}
    </>
  );
}

export default App;
