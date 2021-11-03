import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { Form, MainButton } from "../../styles";

import { API } from "aws-amplify";
import { createGame } from "../../graphql/mutations";

interface Game {
  description: string;
  image: string | null;
  manufactuer: string;
  name: string;
  uploadedBy: string | null;
}

const GameForm: React.FC<{}> = ({}) => {
  const { user } = useContext(AuthContext);

  const [game, setGame] = useState<Game>({
    name: "",
    description: "",
    manufactuer: "",
    image: "",
    uploadedBy: "",
  });

  useEffect(() => {
    if (user) {
      setGame({
        ...game,
        uploadedBy: user.attributes.sub,
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGame({
      ...game,
      [name]: value,
    });
  };

  const uploadGame = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newGame = await API.graphql({
      query: createGame,
      variables: { input: game },
    });
    console.log(newGame);
  };

  return (
    <Form onSubmit={(e) => uploadGame(e)}>
      <label>
        Name
        <input
          value={game.name}
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Description
        <input
          value={game.description}
          type="textarea"
          name="description"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Manufactuer
        <input
          value={game.manufactuer}
          type="text"
          name="manufactuer"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <MainButton color="main">Add New Game</MainButton>
    </Form>
  );
};

export default GameForm;
