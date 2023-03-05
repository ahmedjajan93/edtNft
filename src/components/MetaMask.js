import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ethers } from "ethers";

class MetaMask extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async connectToMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(accounts[0]);
    const balanceInEther = ethers.utils.formatEther(balance);
    this.setState({ selectedAddress: accounts[0], balance: balanceInEther });
  }

  renderMetamask() {
    if (!this.setState.selectedAddress) {
      return (
        <button
          className="bg-[#2F80ED] p-2.5 rounded-full text-white w-40 "
          onClick={() => this.connectToMetamask()}
        >
          Connect Wallet
        </button>
      );
    } else if (typeof window.ethereum == "undefined") {
      return (
        <button
          className="bg-[#2F80ED] p-2.5 rounded-full text-white w-40 "
          onClick={() =>
            toast.error("Please Install MetaMask!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
          }
        >
          Connect Wallet
        </button>
      );
    } else {
      return (
        <div>
          <button className="bg-[#2F80ED] p-2.5 rounded-full text-white w-40 ">
            Connected
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderMetamask()}
        <ToastContainer />
      </div>
    );
  }
}

export default MetaMask;
