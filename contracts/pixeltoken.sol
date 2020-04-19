pragma solidity ^0.5.0;

import '../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol';

contract PixelToken is ERC721Full {
    constructor(string memory _name, string memory _symbol) public {
}


/*
* Custom function to mint pixel hex grid to token URI
*/

function mintToken(
   address _to,
    uint256 _tokenId,
    string memory _tokenURI
)public{
    super._mint(_to, _tokenId);
    super._setTokenURI(_tokenId, _tokenURI);
}
}