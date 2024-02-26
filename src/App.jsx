import "./App.css";
import user from "./json/userData.json";
import friends from "./json/friends.json";
import transactions from "./json/transactionHistory.json";
import { Profile } from "./components/Profile/Profile";
import { FriendList } from "./components/Friends/FriendsList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

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

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
