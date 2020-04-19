const PixelToken = artifacts.require('pixeltoken.sol');

module.exports = function(deployer) {
    deployer.deploy(PixelToken)
}