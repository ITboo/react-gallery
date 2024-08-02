import "./App.css";
import Button from "./components/Button";
import List from "./components/List";
import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters");
  return response.json();
}

function App() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["character"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  if (!data) {
    return <h1>Nothing to show</h1>;
  }

  return (
    <>
      <header>
        <Button className="menu">Menu</Button>
      </header>
      <main>{isSuccess && <List photos={data} />}</main>
    </>
  );
}

export default App;
