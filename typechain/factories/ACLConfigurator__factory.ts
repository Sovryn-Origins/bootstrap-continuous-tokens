/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ACLConfigurator,
  ACLConfiguratorInterface,
} from "../ACLConfigurator";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_acl",
        type: "address",
      },
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "reserve",
        type: "address",
      },
      {
        name: "presale",
        type: "address",
      },
      {
        name: "marketMaker",
        type: "address",
      },
      {
        name: "controller",
        type: "address",
      },
    ],
    name: "setupFundraisingPermissions",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff1916905534801561001a57600080fd5b506116c78061002a6000396000f3006080604052600436106100275763ffffffff60e060020a600035041663bc9657fd811461002c575b600080fd5b34801561003857600080fd5b5061006b600160a060020a0360043581169060243581169060443581169060643581169060843581169060a4351661006d565b005b6000805460ff1615156116925786600160a060020a031663a5ed8bf86040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156100b857600080fd5b505af11580156100cc573d6000803e3d6000fd5b505050506040513d60208110156100e257600080fd5b5051604080517f3e4eb7560000000000000000000000000000000000000000000000000000000081529051919250600160a060020a03808a169263be038478928a928a9290831691633e4eb7569160048083019260209291908290030181600087803b15801561015157600080fd5b505af1158015610165573d6000803e3d6000fd5b505050506040513d602081101561017b57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b1580156101da57600080fd5b505af11580156101ee573d6000803e3d6000fd5b5050505086600160a060020a031663be038478838788600160a060020a0316627bb0036040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561024057600080fd5b505af1158015610254573d6000803e3d6000fd5b505050506040513d602081101561026a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b1580156102c957600080fd5b505af11580156102dd573d6000803e3d6000fd5b5050505086600160a060020a031663be038478848788600160a060020a031663206b60f96040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561033057600080fd5b505af1158015610344573d6000803e3d6000fd5b505050506040513d602081101561035a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b1580156103b957600080fd5b505af11580156103cd573d6000803e3d6000fd5b5050505086600160a060020a031663be038478838687600160a060020a0316636a928e8f6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561042057600080fd5b505af1158015610434573d6000803e3d6000fd5b505050506040513d602081101561044a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b1580156104a957600080fd5b505af11580156104bd573d6000803e3d6000fd5b5050505086600160a060020a031663be038478878687600160a060020a0316637af2b8a06040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561051057600080fd5b505af1158015610524573d6000803e3d6000fd5b505050506040513d602081101561053a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b15801561059957600080fd5b505af11580156105ad573d6000803e3d6000fd5b5050505086600160a060020a031663be038478828687600160a060020a031663a2b96b6f6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561060057600080fd5b505af1158015610614573d6000803e3d6000fd5b505050506040513d602081101561062a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b15801561068957600080fd5b505af115801561069d573d6000803e3d6000fd5b5050505086600160a060020a031663be038478838586600160a060020a0316636a928e8f6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156106f057600080fd5b505af1158015610704573d6000803e3d6000fd5b505050506040513d602081101561071a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b15801561077957600080fd5b505af115801561078d573d6000803e3d6000fd5b5050505086600160a060020a031663be038478838586600160a060020a03166341644f8c6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156107e057600080fd5b505af11580156107f4573d6000803e3d6000fd5b505050506040513d602081101561080a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b15801561086957600080fd5b505af115801561087d573d6000803e3d6000fd5b5050505086600160a060020a031663be038478838586600160a060020a03166360e14b606040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156108d057600080fd5b505af11580156108e4573d6000803e3d6000fd5b505050506040513d60208110156108fa57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b15801561095957600080fd5b505af115801561096d573d6000803e3d6000fd5b5050505086600160a060020a031663be038478838586600160a060020a031663608bac056040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156109c057600080fd5b505af11580156109d4573d6000803e3d6000fd5b505050506040513d60208110156109ea57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b158015610a4957600080fd5b505af1158015610a5d573d6000803e3d6000fd5b5050505086600160a060020a031663be038478838586600160a060020a031663b6e9c8266040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610ab057600080fd5b505af1158015610ac4573d6000803e3d6000fd5b505050506040513d6020811015610ada57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b158015610b3957600080fd5b505af1158015610b4d573d6000803e3d6000fd5b5050505086600160a060020a031663be038478838586600160a060020a0316633017dbed6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610ba057600080fd5b505af1158015610bb4573d6000803e3d6000fd5b505050506040513d6020811015610bca57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b158015610c2957600080fd5b505af1158015610c3d573d6000803e3d6000fd5b5050505086600160a060020a031663be038478838586600160a060020a0316632cd4a2706040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610c9057600080fd5b505af1158015610ca4573d6000803e3d6000fd5b505050506040513d6020811015610cba57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b158015610d1957600080fd5b505af1158015610d2d573d6000803e3d6000fd5b5050505086600160a060020a031663be038478838586600160a060020a031663cf9d82f26040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610d8057600080fd5b505af1158015610d94573d6000803e3d6000fd5b505050506040513d6020811015610daa57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b158015610e0957600080fd5b505af1158015610e1d573d6000803e3d6000fd5b5050505086600160a060020a031663be038478878485600160a060020a03166341644f8c6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610e7057600080fd5b505af1158015610e84573d6000803e3d6000fd5b505050506040513d6020811015610e9a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b158015610ef957600080fd5b505af1158015610f0d573d6000803e3d6000fd5b5050505086600160a060020a031663be038478878485600160a060020a03166360e14b606040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610f6057600080fd5b505af1158015610f74573d6000803e3d6000fd5b505050506040513d6020811015610f8a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b158015610fe957600080fd5b505af1158015610ffd573d6000803e3d6000fd5b5050505086600160a060020a031663be038478878485600160a060020a031663b6e9c8266040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561105057600080fd5b505af1158015611064573d6000803e3d6000fd5b505050506040513d602081101561107a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b1580156110d957600080fd5b505af11580156110ed573d6000803e3d6000fd5b5050505086600160a060020a031663be038478878485600160a060020a0316633017dbed6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561114057600080fd5b505af1158015611154573d6000803e3d6000fd5b505050506040513d602081101561116a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b1580156111c957600080fd5b505af11580156111dd573d6000803e3d6000fd5b5050505086600160a060020a031663be038478878485600160a060020a0316631c1966596040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561123057600080fd5b505af1158015611244573d6000803e3d6000fd5b505050506040513d602081101561125a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b1580156112b957600080fd5b505af11580156112cd573d6000803e3d6000fd5b5050505086600160a060020a031663be038478858485600160a060020a0316630f97e2fe6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561132057600080fd5b505af1158015611334573d6000803e3d6000fd5b505050506040513d602081101561134a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b1580156113a957600080fd5b505af11580156113bd573d6000803e3d6000fd5b5050505086600160a060020a031663be038478828485600160a060020a031663a2b96b6f6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561141057600080fd5b505af1158015611424573d6000803e3d6000fd5b505050506040513d602081101561143a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b15801561149957600080fd5b505af11580156114ad573d6000803e3d6000fd5b5050505086600160a060020a031663be038478828485600160a060020a0316632cd4a2706040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561150057600080fd5b505af1158015611514573d6000803e3d6000fd5b505050506040513d602081101561152a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b15801561158957600080fd5b505af115801561159d573d6000803e3d6000fd5b5050505086600160a060020a031663be038478828485600160a060020a031663cf9d82f26040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156115f057600080fd5b505af1158015611604573d6000803e3d6000fd5b505050506040513d602081101561161a57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03948516600482015292841660248401526044830191909152918a1660648201529051608480830192600092919082900301818387803b15801561167957600080fd5b505af115801561168d573d6000803e3d6000fd5b505050505b505050505050505600a165627a7a7230582093232e9c1237c2b8d80e561b4a117ff9dbe0237ac112ea679f978dbc75e22bde0029";

export class ACLConfigurator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ACLConfigurator> {
    return super.deploy(overrides || {}) as Promise<ACLConfigurator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ACLConfigurator {
    return super.attach(address) as ACLConfigurator;
  }
  connect(signer: Signer): ACLConfigurator__factory {
    return super.connect(signer) as ACLConfigurator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ACLConfiguratorInterface {
    return new utils.Interface(_abi) as ACLConfiguratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ACLConfigurator {
    return new Contract(address, _abi, signerOrProvider) as ACLConfigurator;
  }
}
