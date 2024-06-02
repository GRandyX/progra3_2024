const { _HashTable } = require("./HashTable");
const { _BinarySearchTree } = require("./TreeNode");
const { _FileManagerTree } = require("./FileManagerTree");
const { _FileManagerQueue } = require("./FileManagerQueue");

main();


async function main() {

    let players = await callAppRest( "/person" );
    let HT_Players = new _HashTable( players.length );


    if ( players.length > 0 ) {

        for ( let idx = 0; idx < players.length; idx++ ) {
            let player = players[ idx ];
            HT_Players.insert( player.code, player );
        }

    }

    let teams = await callAppRest( "/team" );
    let HT_Teams = new _HashTable( teams.length );

    if ( teams.length > 0 ) {

        for ( let idx = 0; idx < teams.length; idx++ ) {
            let player = teams[ idx ];
            HT_Teams.insert( player.code, player );
        }

    }
    /*console.log( HT_Players );
    console.log( HT_Teams );*/

    /*const hashTable = new _HashTable(10);
    hashTable.insert("Equipo A", { "Goles": 2, "Mejor jugador": "Jugador X", "Minuto del primer gol": 15 });
    hashTable.insert("Equipo B", { "Goles": 1, "Mejor jugador": "Jugador Y", "Minuto del primer gol": 30 });
    console.log( hashTable.search("Equipo A") );
    console.log( hashTable.search("Equipo B") );


    const bst = new _BinarySearchTree();
    bst.insert("Equipo A", { "Goles": 2, "Mejor jugador": "Jugador X", "Minuto del primer gol": 15 });
    bst.insert("Equipo B", { "Goles": 1, "Mejor jugador": "Jugador Y", "Minuto del primer gol": 30 });
    console.log( bst.search("Equipo A") );
    console.log( bst.search("Equipo B") );


    _FileManagerTree.saveMatches( bst.root, "MatchesTree.txt", "inorder" );
    _FileManagerQueue.saveMatches( bst.root, "MatchesQueue.txt", "preorder" );*/

}


async function callAppRest( endPoint ) {

    return new Promise( function(resolve, reject) {

        const http = require('http');
        const options = {
            hostname: 'localhost',
            port: 4000,
            path: '/restapi'+ endPoint,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const req = http.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);

                    if ( parsedData.errors != undefined ) {
                        console.error( 'Error to call API-Rest' );
                        resolve( [] );
                    }

                    resolve( parsedData.data );
                } catch ( err ) {
                    console.error( 'Error parsing response:', err );
                    resolve( [] );
                }
            });

        });

        req.on('error', (e) => {
            console.error(`Problem with request: ${e.message}`);
            resolve( [] );
        });

        req.end();

    });
}
