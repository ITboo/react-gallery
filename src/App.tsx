import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPhotos(data.splice(1, 20)); // в апи много отсутствующих фото
        setLoading(false)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  if (!photos) {
    return <h1>Nothing to show</h1>;
  }


  return (
    <>
      <header>
        <Button className="menu">Menu</Button>
      </header>
      <main>
        <List photos={photos} />
      </main>
    </>
  );
}

export default App;
