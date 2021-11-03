import React from "react";

interface Props {
  game: {
    createdAt: string;
    description: string;
    id: string;
    image: string | null;
    manufactuer: string;
    name: string;
    ratings: object;
    updatedAt: string;
    uploadedBy: string | null;
  };
}

const GameComponent: React.FC<Props> = ({ game }) => {
  const { name, description, manufactuer } = game;
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{manufactuer}</p>
    </div>
  );
};

export default GameComponent;
