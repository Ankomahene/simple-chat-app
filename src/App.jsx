import { ChatCard } from "./components/ChatCard";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ChatCard />
      </div>
    </div>
  );
}

export default App;
