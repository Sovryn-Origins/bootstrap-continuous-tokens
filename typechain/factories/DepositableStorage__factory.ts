/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DepositableStorage,
  DepositableStorageInterface,
} from "../DepositableStorage";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "isDepositable",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060c78061001f6000396000f300608060405260043610603e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166348a0c8dd81146043575b600080fd5b348015604e57600080fd5b5060556069565b604080519115158252519081900360200190f35b600060927f665fd576fbbe6f247aff98f5c94a561e3f71ec2d3c988d56f12d342396c50cea6097565b905090565b54905600a165627a7a72305820529f3332d544f16a6a0b1deceacdafb84865fd4568d3072359207f079fb5a1f20029";

export class DepositableStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DepositableStorage> {
    return super.deploy(overrides || {}) as Promise<DepositableStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DepositableStorage {
    return super.attach(address) as DepositableStorage;
  }
  connect(signer: Signer): DepositableStorage__factory {
    return super.connect(signer) as DepositableStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositableStorageInterface {
    return new utils.Interface(_abi) as DepositableStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DepositableStorage {
    return new Contract(address, _abi, signerOrProvider) as DepositableStorage;
  }
}
