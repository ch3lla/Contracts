import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    ganache: {
      url: process.env.GANACHE_URL, // Default Ganache GUI URL
      accounts: { mnemonic: process.env.GANACHE_MMENONIC }
    }
  },
};

export default config;
