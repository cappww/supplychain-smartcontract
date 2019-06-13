#Contract Addresses
##For 'Migrations'
    transaction hash: 0xfbc5d023b067b3915f950992fe58a4846e41119755952e556045820167899ee2
    contract address: 0xb665c0A4a60ef057563393eefD89237B1fc171Db
##For 'FarmerRole'
    transaction hash: 0xd85f4da17b5ef2d28f00950dade8dd6d12a71e1269452eb35028a146e3092960
    contract address: 0x872150f3eaE110E6589e0396A4A49aAb73748708
##For 'DistributorRole'
    transaction hash: 0x89a99acd61ae9cf7375043a1e58710118bc02c9688482d7ae94a75b1c68917f3
    contract address: 0x43a0416b3A22890bD82933dcb8D0486ed5e7A33f
##For 'RetailerRole'
    transaction hash: 0x777ba603e613ee07c01c6bc643ea4c53de6b5ef41b9bcae1681543ddc97fd2d2
    contract address: 0x64f01a2C89533c2c11642b249E50aB2a3184F624
##For 'ConsumerRole'
    transaction hash: 0xd5f8fe82bae31cb03f37c00b687a474e36e541869c2e4b66638ce45a5dde4f9b
    contract address: 0xBEF8b8470FE26c6ADf5A7B87D429b15D2617A7A4
##For 'SupplyChain'
    transaction hash: 0x3eea148b5100f567887056d8d088b495b8de24e635664465df49c3d06bee6a18
    contract address: 0xB80cb80021702b8D21D10FcA52B041891760D8ff

#Libraries Used
##truffle-assertions
For some reason, the supplychain.Harvested().watch function could not be found. Perhaps this is due to version differences. Instead, I used truffle-assersions which is a package that tests emitted events.

##truffle-hdwallet-provider
Used to deploy the contracts via infura.

#Program version numbers
- nodeJS v8.11.3
- Truffle v5.0.21
- Web3 v1.0.0-beta.37
- Solidity v0.5.8

#General
When launching the Dapp, be sure to click the "Add All Parties" button as the owner of the contract. This adds all of the accounts to their respective roles in the supply chain.