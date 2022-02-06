// AN ATTEMPT OT USE THE SUPERFLUID SDK
// However, was unable to figure it out

import { customHttpProvider } from "./config";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

// export const Framework = require("@superfluid-finance/sdk-core");
// export const ethers = require("ethers");

export function calculateFlowRate(amount) {
  if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
    alert("You can only calculate a flowRate based on a number");
    return;
  } else if (typeof Number(amount) === "number") {
    if (Number(amount) === 0) {
      return 0;
    }
    const amountInWei = ethers.BigNumber.from(amount);
    const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
    const calculatedFlowRate = monthlyAmount * 3600 * 24 * 30;
    return calculatedFlowRate;
  }
}

export async function createNewFlow(receiver, flowRate) {
  // const provider = new ethers.providers.InfuraProvider(
  //   "matic",
  //   "<INFURA_API_KEY>"
  // );
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  const signer = provider.getSigner();

  const sf = await Framework.create({
    chainId: Number(chainId),
    provider: provider
  });
  const metaMaskSigner = sf.createSigner({ web3Provider: provider });
  const DAIx = "0xe3cb950cb164a31c66e32c320a800d477019dcff";
  const createFlowOperation = sf.cfaV1.createFlow({
    receiver: receiver,
    flowRate: flowRate,
    superToken: DAIx
    // userData?: string
  });
  const result = await createFlowOperation.exec(metaMaskSigner);
  console.log(result);

}

export async function createNewFlow1(recipient, flowRate) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  console.log('signer', signer)
  const sf = await Framework.create({
    chainId: Number(chainId),
    provider: provider
  });
  console.log('sf', sf)

  const DAIx = "0xe3cb950cb164a31c66e32c320a800d477019dcff";

  try {
    const createFlowOperation = sf.cfaV1.createFlow({
      receiver: recipient,
      flowRate: flowRate,
      superToken: DAIx
      // userData?: string
    });

    console.log("Creating your stream...");

    const result = await createFlowOperation.exec(signer);
    console.log(result);

    console.log(
      `Congrats - you've just created a money stream!
    View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
    Network: Kovan
    Super Token: DAIx
    Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
    Receiver: ${recipient},
    FlowRate: ${flowRate}
    `
    );
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}

export async function createNewFlow2(recipient, flowRate) {
  const sf = await Framework.create({
    networkName: "kovan",
    provider: customHttpProvider
  });

  const signer = sf.createSigner({
    privateKey:
      "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
    provider: customHttpProvider
  });

  const DAIx = "0xe3cb950cb164a31c66e32c320a800d477019dcff";

  try {
    const createFlowOperation = sf.cfaV1.createFlow({
      flowRate: flowRate,
      receiver: recipient,
      superToken: DAIx
      // userData?: string
    });

    console.log("Creating your stream...");

    const result = await createFlowOperation.exec(signer);
    console.log(result);

    console.log(
      `Congrats - you've just created a money stream!
    View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
    Network: Kovan
    Super Token: DAIx
    Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
    Receiver: ${recipient},
    FlowRate: ${flowRate}
    `
    );
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}
