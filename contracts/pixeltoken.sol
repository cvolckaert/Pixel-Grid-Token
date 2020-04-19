pragma solidity ^0.6.4;

import '../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol';

contract PixelToken is ERC721Token {
    constructor(string _name, string_symbol)
{}


/*
* Custom function to mint pixel hex grid to token URI
*/

function mintToken(
   address _to,
    uint256 _tokenId,
    string _tokenURI
)public{
    super.mint(_to, _tokenId);
    super.setTokenURI(_tokenId, _tokenURI);
}
}