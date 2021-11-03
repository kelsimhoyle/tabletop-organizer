import React, { useState, useEffect } from "react";

import { API, graphqlOperation } from "aws-amplify";
import { listGames } from "../../graphql/queries";
import { ListGamesQuery } from "../../API";

import GameComponent from "../GameComponent";
 
interface GraphQLResponse {
    data: ListGamesQuery;
    errors: any[]
}

const PopularGames: React.FC<{}> = ()=> {
    const [games, setGames] = useState<any[] | null>();

    const getGames = async () => {
        try {
            const data: GraphQLResponse = await API.graphql(graphqlOperation(listGames)) as GraphQLResponse;
            if (data.data) {
                console.log("here")
                if (data.data.listGames) {
                    setGames(data.data.listGames.items)
                }
            }
            
        } catch(err) {
            console.log(err)
            return err;
        }
    }
    useEffect(() => {
            getGames()
    }, [])
    return (
        <>
        <h2>See what others are playing!</h2>
        {games ? 
            games.map(game => <GameComponent game={game} />)  : null }

        </>
    );
};

export default PopularGames;