/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShelf = /* GraphQL */ `
  subscription OnCreateShelf {
    onCreateShelf {
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
export const onUpdateShelf = /* GraphQL */ `
  subscription OnUpdateShelf {
    onUpdateShelf {
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
export const onDeleteShelf = /* GraphQL */ `
  subscription OnDeleteShelf {
    onDeleteShelf {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateShelvedGame = /* GraphQL */ `
  subscription OnCreateShelvedGame {
    onCreateShelvedGame {
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
export const onUpdateShelvedGame = /* GraphQL */ `
  subscription OnUpdateShelvedGame {
    onUpdateShelvedGame {
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
export const onDeleteShelvedGame = /* GraphQL */ `
  subscription OnDeleteShelvedGame {
    onDeleteShelvedGame {
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating {
    onUpdateRating {
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating {
    onDeleteRating {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
