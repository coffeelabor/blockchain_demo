const Block = require("./block.js");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis];
  }

  addblock(data) {
    const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
    this.chain.push(block);

    return block;
  }
}
