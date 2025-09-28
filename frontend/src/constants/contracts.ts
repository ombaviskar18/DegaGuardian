//DegaGuardian Contract Addresses on Ethereum Sepolia
export const SEPOLIA_GUARDIAN_CONTRACTS = {
	DToken: '0x5e5eEE029C1bC9311caC8547149178dD63B86071', // ✅ Deployed
	ContractAnalysis: '0x4E68Ca3Cf7B7317ab758e8Be73EEF3a711945742', // ✅ Deployed
	Tokenomics: '0xb18D8fB3Ed2916752F67082Efac91a6d03105468', // ✅ Deployed
	SocialAnalysis: '0xc3C8624a650747BE5be7579e4145E314ECAD0e1C', // ✅ Deployed
	Monitoring: '0x8F98e14bCa9B0F65048712278Dd8e0a9b1dbbb11', // ✅ Deployed
	Universal: '0x65E13C1Ec7B7ddcf18244a1db9F604b7da5d1D2F', // ✅ Deployed
	DomainManagement: '0x2835A0c3A302b9cD1FB4bB89F4e42014dc429273', // ✅ Deployed
} as const;

// Default contracts (use Sepolia as primary)
export const GUARDIAN_CONTRACTS = SEPOLIA_GUARDIAN_CONTRACTS;

//Dega Contract Addresses on Doma Testnet (Legacy)
export const DOMA_GUARDIAN_CONTRACTS = {
	DToken: '0x6F8f19d73EDFD192Fa7A93D83CD1145CFDC50B32',
	ContractAnalysis: '0xE623c001F28811F72aa024BF9608a59c5e66720d',
	Tokenomics: '0xC71F50AbCb258D800E9Ad52c4A93DA0BcAB294E0',
	SocialAnalysis: '0xa7f984BF6Cb376AC8Fb6A58aA6F65d7F940fFFea',
	Monitoring: '0x4aA7B747Ed35B358B62fc9e13F8aCC696e517477',
	Universal: '0xdb5fC412a5515033265Dc9e8d383f9C2b551c747',
} as const;

// Legacy export for backward compatibility
export const HELLO_UNIVERSAL_CONTRACT_ADDRESS = GUARDIAN_CONTRACTS.Universal;
