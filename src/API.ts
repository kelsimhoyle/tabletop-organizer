/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateShelfInput = {
  id?: string | null,
  name: string,
  owner: string,
};

export type ModelShelfConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelShelfConditionInput | null > | null,
  or?: Array< ModelShelfConditionInput | null > | null,
  not?: ModelShelfConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Shelf = {
  __typename: "Shelf",
  id: string,
  name: string,
  games?: ModelShelvedGameConnection | null,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelShelvedGameConnection = {
  __typename: "ModelShelvedGameConnection",
  items?:  Array<ShelvedGame | null > | null,
  nextToken?: string | null,
};

export type ShelvedGame = {
  __typename: "ShelvedGame",
  id: string,
  shelfID: string,
  gameID: string,
  game: Game,
  shelf: Shelf,
  createdAt: string,
  updatedAt: string,
};

export type Game = {
  __typename: "Game",
  id: string,
  name: string,
  description: string,
  manufactuer?: string | null,
  image?: string | null,
  uploadedBy?: string | null,
  ratings?: ModelRatingConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelRatingConnection = {
  __typename: "ModelRatingConnection",
  items?:  Array<Rating | null > | null,
  nextToken?: string | null,
};

export type Rating = {
  __typename: "Rating",
  id: string,
  name: string,
  gameID: string,
  game?: Game | null,
  comment?: ModelCommentConnection | null,
  shelf: boolean,
  favorite?: boolean | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  ratingID: string,
  post?: Rating | null,
  content: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateShelfInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type DeleteShelfInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
  name: string,
  description: string,
  manufactuer?: string | null,
  image?: string | null,
  uploadedBy?: string | null,
};

export type ModelGameConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  manufactuer?: ModelStringInput | null,
  image?: ModelStringInput | null,
  uploadedBy?: ModelStringInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type UpdateGameInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  manufactuer?: string | null,
  image?: string | null,
  uploadedBy?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateShelvedGameInput = {
  id?: string | null,
  shelfID: string,
  gameID: string,
};

export type ModelShelvedGameConditionInput = {
  shelfID?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelShelvedGameConditionInput | null > | null,
  or?: Array< ModelShelvedGameConditionInput | null > | null,
  not?: ModelShelvedGameConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateShelvedGameInput = {
  id: string,
  shelfID?: string | null,
  gameID?: string | null,
};

export type DeleteShelvedGameInput = {
  id: string,
};

export type CreateRatingInput = {
  id?: string | null,
  name: string,
  gameID: string,
  shelf: boolean,
  favorite?: boolean | null,
};

export type ModelRatingConditionInput = {
  name?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  shelf?: ModelBooleanInput | null,
  favorite?: ModelBooleanInput | null,
  and?: Array< ModelRatingConditionInput | null > | null,
  or?: Array< ModelRatingConditionInput | null > | null,
  not?: ModelRatingConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateRatingInput = {
  id: string,
  name?: string | null,
  gameID?: string | null,
  shelf?: boolean | null,
  favorite?: boolean | null,
};

export type DeleteRatingInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  ratingID: string,
  content: string,
};

export type ModelCommentConditionInput = {
  ratingID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  ratingID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelShelfFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelShelfFilterInput | null > | null,
  or?: Array< ModelShelfFilterInput | null > | null,
  not?: ModelShelfFilterInput | null,
};

export type ModelShelfConnection = {
  __typename: "ModelShelfConnection",
  items?:  Array<Shelf | null > | null,
  nextToken?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  manufactuer?: ModelStringInput | null,
  image?: ModelStringInput | null,
  uploadedBy?: ModelStringInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items?:  Array<Game | null > | null,
  nextToken?: string | null,
};

export type ModelShelvedGameFilterInput = {
  id?: ModelIDInput | null,
  shelfID?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelShelvedGameFilterInput | null > | null,
  or?: Array< ModelShelvedGameFilterInput | null > | null,
  not?: ModelShelvedGameFilterInput | null,
};

export type ModelRatingFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  shelf?: ModelBooleanInput | null,
  favorite?: ModelBooleanInput | null,
  and?: Array< ModelRatingFilterInput | null > | null,
  or?: Array< ModelRatingFilterInput | null > | null,
  not?: ModelRatingFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  ratingID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateShelfMutationVariables = {
  input: CreateShelfInput,
  condition?: ModelShelfConditionInput | null,
};

export type CreateShelfMutation = {
  createShelf?:  {
    __typename: "Shelf",
    id: string,
    name: string,
    games?:  {
      __typename: "ModelShelvedGameConnection",
      items?:  Array< {
        __typename: "ShelvedGame",
        id: string,
        shelfID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateShelfMutationVariables = {
  input: UpdateShelfInput,
  condition?: ModelShelfConditionInput | null,
};

export type UpdateShelfMutation = {
  updateShelf?:  {
    __typename: "Shelf",
    id: string,
    name: string,
    games?:  {
      __typename: "ModelShelvedGameConnection",
      items?:  Array< {
        __typename: "ShelvedGame",
        id: string,
        shelfID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteShelfMutationVariables = {
  input: DeleteShelfInput,
  condition?: ModelShelfConditionInput | null,
};

export type DeleteShelfMutation = {
  deleteShelf?:  {
    __typename: "Shelf",
    id: string,
    name: string,
    games?:  {
      __typename: "ModelShelvedGameConnection",
      items?:  Array< {
        __typename: "ShelvedGame",
        id: string,
        shelfID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    manufactuer?: string | null,
    image?: string | null,
    uploadedBy?: string | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        name: string,
        gameID: string,
        shelf: boolean,
        favorite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    manufactuer?: string | null,
    image?: string | null,
    uploadedBy?: string | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        name: string,
        gameID: string,
        shelf: boolean,
        favorite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    manufactuer?: string | null,
    image?: string | null,
    uploadedBy?: string | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        name: string,
        gameID: string,
        shelf: boolean,
        favorite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateShelvedGameMutationVariables = {
  input: CreateShelvedGameInput,
  condition?: ModelShelvedGameConditionInput | null,
};

export type CreateShelvedGameMutation = {
  createShelvedGame?:  {
    __typename: "ShelvedGame",
    id: string,
    shelfID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    shelf:  {
      __typename: "Shelf",
      id: string,
      name: string,
      games?:  {
        __typename: "ModelShelvedGameConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateShelvedGameMutationVariables = {
  input: UpdateShelvedGameInput,
  condition?: ModelShelvedGameConditionInput | null,
};

export type UpdateShelvedGameMutation = {
  updateShelvedGame?:  {
    __typename: "ShelvedGame",
    id: string,
    shelfID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    shelf:  {
      __typename: "Shelf",
      id: string,
      name: string,
      games?:  {
        __typename: "ModelShelvedGameConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteShelvedGameMutationVariables = {
  input: DeleteShelvedGameInput,
  condition?: ModelShelvedGameConditionInput | null,
};

export type DeleteShelvedGameMutation = {
  deleteShelvedGame?:  {
    __typename: "ShelvedGame",
    id: string,
    shelfID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    shelf:  {
      __typename: "Shelf",
      id: string,
      name: string,
      games?:  {
        __typename: "ModelShelvedGameConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRatingMutationVariables = {
  input: CreateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type CreateRatingMutation = {
  createRating?:  {
    __typename: "Rating",
    id: string,
    name: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ratingID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    shelf: boolean,
    favorite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateRatingMutationVariables = {
  input: UpdateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type UpdateRatingMutation = {
  updateRating?:  {
    __typename: "Rating",
    id: string,
    name: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ratingID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    shelf: boolean,
    favorite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteRatingMutationVariables = {
  input: DeleteRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type DeleteRatingMutation = {
  deleteRating?:  {
    __typename: "Rating",
    id: string,
    name: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ratingID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    shelf: boolean,
    favorite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    ratingID: string,
    post?:  {
      __typename: "Rating",
      id: string,
      name: string,
      gameID: string,
      game?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        manufactuer?: string | null,
        image?: string | null,
        uploadedBy?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comment?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      shelf: boolean,
      favorite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    ratingID: string,
    post?:  {
      __typename: "Rating",
      id: string,
      name: string,
      gameID: string,
      game?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        manufactuer?: string | null,
        image?: string | null,
        uploadedBy?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comment?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      shelf: boolean,
      favorite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    ratingID: string,
    post?:  {
      __typename: "Rating",
      id: string,
      name: string,
      gameID: string,
      game?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        manufactuer?: string | null,
        image?: string | null,
        uploadedBy?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comment?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      shelf: boolean,
      favorite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetShelfQueryVariables = {
  id: string,
};

export type GetShelfQuery = {
  getShelf?:  {
    __typename: "Shelf",
    id: string,
    name: string,
    games?:  {
      __typename: "ModelShelvedGameConnection",
      items?:  Array< {
        __typename: "ShelvedGame",
        id: string,
        shelfID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListShelfsQueryVariables = {
  filter?: ModelShelfFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShelfsQuery = {
  listShelfs?:  {
    __typename: "ModelShelfConnection",
    items?:  Array< {
      __typename: "Shelf",
      id: string,
      name: string,
      games?:  {
        __typename: "ModelShelvedGameConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    manufactuer?: string | null,
    image?: string | null,
    uploadedBy?: string | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        name: string,
        gameID: string,
        shelf: boolean,
        favorite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items?:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetShelvedGameQueryVariables = {
  id: string,
};

export type GetShelvedGameQuery = {
  getShelvedGame?:  {
    __typename: "ShelvedGame",
    id: string,
    shelfID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    shelf:  {
      __typename: "Shelf",
      id: string,
      name: string,
      games?:  {
        __typename: "ModelShelvedGameConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListShelvedGamesQueryVariables = {
  filter?: ModelShelvedGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShelvedGamesQuery = {
  listShelvedGames?:  {
    __typename: "ModelShelvedGameConnection",
    items?:  Array< {
      __typename: "ShelvedGame",
      id: string,
      shelfID: string,
      gameID: string,
      game:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        manufactuer?: string | null,
        image?: string | null,
        uploadedBy?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      shelf:  {
        __typename: "Shelf",
        id: string,
        name: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRatingQueryVariables = {
  id: string,
};

export type GetRatingQuery = {
  getRating?:  {
    __typename: "Rating",
    id: string,
    name: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ratingID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    shelf: boolean,
    favorite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListRatingsQueryVariables = {
  filter?: ModelRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRatingsQuery = {
  listRatings?:  {
    __typename: "ModelRatingConnection",
    items?:  Array< {
      __typename: "Rating",
      id: string,
      name: string,
      gameID: string,
      game?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        manufactuer?: string | null,
        image?: string | null,
        uploadedBy?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comment?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      shelf: boolean,
      favorite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    ratingID: string,
    post?:  {
      __typename: "Rating",
      id: string,
      name: string,
      gameID: string,
      game?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        manufactuer?: string | null,
        image?: string | null,
        uploadedBy?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comment?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      shelf: boolean,
      favorite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      ratingID: string,
      post?:  {
        __typename: "Rating",
        id: string,
        name: string,
        gameID: string,
        shelf: boolean,
        favorite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateShelfSubscription = {
  onCreateShelf?:  {
    __typename: "Shelf",
    id: string,
    name: string,
    games?:  {
      __typename: "ModelShelvedGameConnection",
      items?:  Array< {
        __typename: "ShelvedGame",
        id: string,
        shelfID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateShelfSubscription = {
  onUpdateShelf?:  {
    __typename: "Shelf",
    id: string,
    name: string,
    games?:  {
      __typename: "ModelShelvedGameConnection",
      items?:  Array< {
        __typename: "ShelvedGame",
        id: string,
        shelfID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteShelfSubscription = {
  onDeleteShelf?:  {
    __typename: "Shelf",
    id: string,
    name: string,
    games?:  {
      __typename: "ModelShelvedGameConnection",
      items?:  Array< {
        __typename: "ShelvedGame",
        id: string,
        shelfID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    manufactuer?: string | null,
    image?: string | null,
    uploadedBy?: string | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        name: string,
        gameID: string,
        shelf: boolean,
        favorite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    manufactuer?: string | null,
    image?: string | null,
    uploadedBy?: string | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        name: string,
        gameID: string,
        shelf: boolean,
        favorite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    description: string,
    manufactuer?: string | null,
    image?: string | null,
    uploadedBy?: string | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        name: string,
        gameID: string,
        shelf: boolean,
        favorite?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateShelvedGameSubscription = {
  onCreateShelvedGame?:  {
    __typename: "ShelvedGame",
    id: string,
    shelfID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    shelf:  {
      __typename: "Shelf",
      id: string,
      name: string,
      games?:  {
        __typename: "ModelShelvedGameConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateShelvedGameSubscription = {
  onUpdateShelvedGame?:  {
    __typename: "ShelvedGame",
    id: string,
    shelfID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    shelf:  {
      __typename: "Shelf",
      id: string,
      name: string,
      games?:  {
        __typename: "ModelShelvedGameConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteShelvedGameSubscription = {
  onDeleteShelvedGame?:  {
    __typename: "ShelvedGame",
    id: string,
    shelfID: string,
    gameID: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    shelf:  {
      __typename: "Shelf",
      id: string,
      name: string,
      games?:  {
        __typename: "ModelShelvedGameConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRatingSubscription = {
  onCreateRating?:  {
    __typename: "Rating",
    id: string,
    name: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ratingID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    shelf: boolean,
    favorite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateRatingSubscription = {
  onUpdateRating?:  {
    __typename: "Rating",
    id: string,
    name: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ratingID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    shelf: boolean,
    favorite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteRatingSubscription = {
  onDeleteRating?:  {
    __typename: "Rating",
    id: string,
    name: string,
    gameID: string,
    game?:  {
      __typename: "Game",
      id: string,
      name: string,
      description: string,
      manufactuer?: string | null,
      image?: string | null,
      uploadedBy?: string | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ratingID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    shelf: boolean,
    favorite?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    ratingID: string,
    post?:  {
      __typename: "Rating",
      id: string,
      name: string,
      gameID: string,
      game?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        manufactuer?: string | null,
        image?: string | null,
        uploadedBy?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comment?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      shelf: boolean,
      favorite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    ratingID: string,
    post?:  {
      __typename: "Rating",
      id: string,
      name: string,
      gameID: string,
      game?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        manufactuer?: string | null,
        image?: string | null,
        uploadedBy?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comment?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      shelf: boolean,
      favorite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    ratingID: string,
    post?:  {
      __typename: "Rating",
      id: string,
      name: string,
      gameID: string,
      game?:  {
        __typename: "Game",
        id: string,
        name: string,
        description: string,
        manufactuer?: string | null,
        image?: string | null,
        uploadedBy?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comment?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      shelf: boolean,
      favorite?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
