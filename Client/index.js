const { _HashTable } = require("./HashTable");
const { _BinarySearchTree } = require("./TreeNode");
const { _FileManagerTree } = require("./FileManagerTree");
const { _FileManagerQueue } = require("./FileManagerQueue");

function main() {

    const hashTable = new _HashTable(10);
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

    
    _FileManagerQueue.saveMatches( bst.root, "MatchesQueue.txt", "preorder" );

}

main();