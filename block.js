class Block {
    constructor({timestamp, lastHash, hash, data}) {
        this.timestamp = timestamp; 
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
}

const block = new Block({ timestamp: '01/01/01', lastHash: 'foo-lastHash', hash: 'foo-hash', data: 'foo-data' });
it('has a timestamp, lastHash, hash, and data property', () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(this.lastHash);
    expect(block.data).toEqual(data);
    
});

describe('genesis()', () => {
    const genesisBlock = Block.genesis();   
})

module.exports = block;