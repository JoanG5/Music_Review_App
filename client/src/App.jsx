import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Album from "./pages/Album";
import Song from "./pages/Song";
import Profile from "./pages/Profile";
import SavedSongs from "./pages/SavedSongs";
import SavedAlbums from "./pages/SavedAlbums";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="/song" element={<Song />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/savedsong" element={<SavedSongs />} />
        <Route path="/profile/savedalbum" element={<SavedAlbums />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
