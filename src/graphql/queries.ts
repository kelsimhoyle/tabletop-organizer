/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShelf = /* GraphQL */ `
  query GetShelf($id: ID!) {
    getShelf(id: $id) {
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
export const listShelfs = /* GraphQL */ `
  query ListShelfs(
    $filter: ModelShelfFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShelfs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        games {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getShelvedGame = /* GraphQL */ `
  query GetShelvedGame($id: ID!) {
    getShelvedGame(id: $id) {
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
export const listShelvedGames = /* GraphQL */ `
  query ListShelvedGames(
    $filter: ModelShelvedGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShelvedGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        shelf {
          id
          name
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ratingID
        post {
          id
          name
          gameID
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
      nextToken
    }
  }
`;
