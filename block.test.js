describe('Block', () => {
    const timestamp = 'a-date';
    const lastHash = 'foo hash';
    const hash = 'bar-hash';
    const data = ['blockchain', 'data'];
    const block = new Block({
        timestamp: timestamp,
        lastHash: lastHash,
        hash: hash,
        data: data
    });

});