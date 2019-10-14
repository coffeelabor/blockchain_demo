const Block = require("./block.js");

//genesis
const genesis = Block.genesis();
console.log(genesis.toString());

//mine a new block
const block = Block.mineBlock(genesis, "foo");
console.log(block.toString());
