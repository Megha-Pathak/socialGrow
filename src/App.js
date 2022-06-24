import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <div className="SocialGrow">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
