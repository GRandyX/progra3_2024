class HashTable {

    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill([]);
    }

    _hash(key) {
        return this._hashCode(key) % this.size;
    }

    _hashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) - hash + key.charCodeAt(i);
            hash = hash & hash;
        }
        return hash;
    }

    insert(key, value) {
        const index = this._hash(key);
        this.table[index].push({ key, value });
    }

    search( key ) {
        const index = this._hash( key );
        for ( const item of this.table[index] ) {
            if ( item.key === key ) {
                return item.value;
            }
        }
        return null;
    }
}

const _HashTable = HashTable;
module.exports = { _HashTable };