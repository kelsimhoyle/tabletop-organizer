/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShelf = /* GraphQL */ `
  mutation CreateShelf(
    $input: CreateShelfInput!
    $condition: ModelShelfConditionInput
  ) {
    createShelf(input: $input, condition: $condition) {
      id
      name
      games {
        items {
          id
          shelfID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateShelf = /* GraphQL */ `
  mutation UpdateShelf(
    $input: UpdateShelfInput!
    $condition: ModelShelfConditionInput
  ) {
    updateShelf(input: $input, condition: $condition) {
      id
      name
      games {
        items {
          id
          shelfID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteShelf = /* GraphQL */ `
  mutation DeleteShelf(
    $input: DeleteShelfInput!
    $condition: ModelShelfConditionInput
  ) {
    deleteShelf(input: $input, condition: $condition) {
      id
      name
      games {
        items {
          id
          shelfID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      name
      description
      manufactuer
      image
      uploadedBy
      ratings {
        items {
          id
          name
          gameID
          shelf
          favorite
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      name
      description
      manufactuer
      image
      uploadedBy
      ratings {
        items {
          id
          name
          gameID
          shelf
          favorite
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      name
      description
      manufactuer
      image
      uploadedBy
      ratings {
        items {
          id
          name
          gameID
          shelf
          favorite
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createShelvedGame = /* GraphQL */ `
  mutation CreateShelvedGame(
    $input: CreateShelvedGameInput!
    $condition: ModelShelvedGameConditionInput
  ) {
    createShelvedGame(input: $input, condition: $condition) {
      id
      shelfID
      gameID
      game {
        id
        name
        description
        manufactuer
        image
        uploadedBy
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      shelf {
        id
        name
        games {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateShelvedGame = /* GraphQL */ `
  mutation UpdateShelvedGame(
    $input: UpdateShelvedGameInput!
    $condition: ModelShelvedGameConditionInput
  ) {
    updateShelvedGame(input: $input, condition: $condition) {
      id
      shelfID
      gameID
      game {
        id
        name
        description
        manufactuer
        image
        uploadedBy
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      shelf {
        id
        name
        games {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteShelvedGame = /* GraphQL */ `
  mutation DeleteShelvedGame(
    $input: DeleteShelvedGameInput!
    $condition: ModelShelvedGameConditionInput
  ) {
    deleteShelvedGame(input: $input, condition: $condition) {
      id
      shelfID
      gameID
      game {
        id
        name
        description
        manufactuer
        image
        uploadedBy
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      shelf {
        id
        name
        games {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
      id
      name
      gameID
      game {
        id
        name
        description
        manufactuer
        image
        uploadedBy
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      comment {
        items {
          id
          ratingID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      shelf
      favorite
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
      id
      name
      gameID
      game {
        id
        name
        description
        manufactuer
        image
        uploadedBy
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      comment {
        items {
          id
          ratingID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      shelf
      favorite
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
      id
      name
      gameID
      game {
        id
        name
        description
        manufactuer
        image
        uploadedBy
        ratings {
          nextToken
        }
        createdAt
        updatedAt
      }
      comment {
        items {
          id
          ratingID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      shelf
      favorite
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      ratingID
      post {
        id
        name
        gameID
        game {
          id
          name
          description
          manufactuer
          image
          uploadedBy
          createdAt
          updatedAt
        }
        comment {
          nextToken
        }
        shelf
        favorite
        createdAt
        updatedAt
        owner
      }
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      ratingID
      post {
        id
        name
        gameID
        game {
          id
          name
          description
          manufactuer
          image
          uploadedBy
          createdAt
          updatedAt
        }
        comment {
          nextToken
        }
        shelf
        favorite
        createdAt
        updatedAt
        owner
      }
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      ratingID
      post {
        id
        name
        gameID
        game {
          id
          name
          description
          manufactuer
          image
          uploadedBy
          createdAt
          updatedAt
        }
        comment {
          nextToken
        }
        shelf
        favorite
        createdAt
        updatedAt
        owner
      }
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
