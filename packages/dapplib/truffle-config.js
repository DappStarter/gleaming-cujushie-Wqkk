require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remain huge heavy process sure spray'; 
let testAccounts = [
"0x5780f58a674a97ff1741882c71ad55f82942d28a95ce718fb2d5dafd7ae6f4de",
"0x7594ec79275f23947579218dedef811ae111e7cf7684f060dafdf7197415cf9e",
"0x76c288f8e38ad778efef4979ea74d9f118180ac67de7dfb9bef0112c4b5cd595",
"0xb52ff5913a5733ffb48daacbb466083966af028aa1ac7bfa0477d804dab7eb2d",
"0x766e0730c4f7f4ed51b9bec526cd320212486dab10127a1d9d26ea32dcb9a844",
"0x769aecb14c3639aad8e39132bc869c57d5ed1b30e8e648b27f4533a1121a733b",
"0xa331c065eb4c48601c10278914c3f934d8358af6de7f8a1659b8b49ec8e7102d",
"0x2718456337e16faec4a7dcc862136513efb08a3556b35aacef2206e9241b8961",
"0x789636755e56a017dcde0d2de6847efcab8d1e1f0e466823c12f62a4b91190ca",
"0x0e76a48a6ad385502faf4c06472f72f3919dc3dbb5b229188a05aaeae5f53e5d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

