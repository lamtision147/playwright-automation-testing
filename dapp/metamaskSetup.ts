import dappwright, { Dappwright, MetaMaskWallet } from "@tenkeylabs/dappwright";
import fs from 'fs';
import path from 'path';

export async function setupMetaMask() {
  // Đường dẫn đến thư mục chứa file tạm của Dappwright
  const tempSessionPath = path.join(process.env.TEMP || '/tmp', 'dappwright', 'session', 'metamask', '0');
  const crashpadFilePath = path.join(tempSessionPath, 'CrashpadMetrics-active.pma');

  // Kiểm tra và ghi đè lên file nếu nó tồn tại
  if (fs.existsSync(crashpadFilePath)) {
    try {
      fs.writeFileSync(crashpadFilePath, '', { flag: 'w+' }); // Ghi đè file mà không xóa
    } catch (err) {
      console.error('Error overwriting CrashpadMetrics-active.pma:', err);
    }
  }

  const [wallet, _, context] = await dappwright.bootstrap("", {
    wallet: "metamask",
    version: MetaMaskWallet.recommendedVersion,
    seed: "woman open manual riot okay special unique diesel give morning spring mention",
    fresh: true,
    headless: false,
  });

  await wallet.addNetwork({
    networkName: "SEI Mainnet",
    rpc: "https://rpc-evm-pacific-1.seitrace.com",
    chainId: 1329,
    symbol: "SEI",
  });

  await wallet.importPK('2c9b24758d7be98f2f934c9d00904fe4b561dddd9db559ef91152274b6ae5899');
  //await wallet.importPK('541f46393f05c9d8eb924b9c2c9f05e431654145cbaac9aae5670f53cedcca45');
  
  await wallet.switchAccount(2);

  return { wallet, context };
}
