import React, { useEffect } from "react";
import "./App.css";
import Test from "./components/pages/Test";
import { PokemonApiBaseurl } from "./server/PokemonApi";
import axios from "axios";
import { Button, Card, Input } from "@material-ui/core";
import "./styles/PokemonCard.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [pokemons, setPokemons] = React.useState([]);

  useEffect(() => {
    // console.log('wohoo!', PokemonApiBaseurl);
    // pokemonHandler();

    axios
      .get(PokemonApiBaseurl)
      .then((res) => {
        const listPokemons = res.data.results;
        setPokemons(listPokemons);
        console.log(listPokemons);
      })
      .catch((e) => e);
  }, []);

  return (
    <div className="App">
      <Test />
      <div>
        <h1> Counter : {count}</h1>
        <Button
          onClick={() => setCount(count + 1)}
          variant="contained"
          color="primary"
        >
          increment
        </Button>
        <Button
          onClick={() => setCount(count - 1)}
          variant="contained"
          color="secondary"
        >
          decrement
        </Button>
      </div>

      <Input
        style={{
          width: "90%",
          margin: "10px",
        }}
      ></Input>

      <div className="columns">
        {pokemons.map((pokemon: any) => (
          <Card className="card" key={pokemon.name}>
            <p>{pokemon.name}</p>
            <img src="" alt="" />
            <Button
              onClick={() => setCount(count - 1)}
              variant="contained"
              color="inherit"
            >
              Add to favorites
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
