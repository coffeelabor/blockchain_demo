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

  isValidChain(chain) {
    // 3 conditions for a chain to be valid:
    // first block should be a genisis block, the prevHash of the current block is the hash of the previous block,
    // the hash of
    // check to see if first block is genesis block
    // if(JSON.stringify(this.chain[0])===JSON.stringify(Block.genesis()))
    // return false;
    // for(let i = 1; 1<this.chain.length; i++){
    //   const prevBlock = this.chain[i-i]
    //   const block = this.chain[i]
    //   if(block.prevHash !== prevBlock.hash || )
    // }
  }
}

module.exports = Blockchain;
