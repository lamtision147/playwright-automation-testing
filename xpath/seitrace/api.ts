export const SELECTORS = {
  resourcesTab: '//html/body/div[1]/div[2]/header/div/div/div[2]/div/div[6]/button',
  insightDocsTab: '//html/body/div[1]/div[2]/header/div/div/div[2]/div/div[6]/div/div/a[2]/span',
  authoKeys: '//html/body/div[1]/div[2]/main/div/div/div/div[2]/div[2]/section/div[2]/button',
  inputKeys: '//html/body/div[1]/div[2]/main/div/div/div/div[2]/div[2]/section/div[2]/div/div[2]/div/div/div[2]/div/form/div[1]/div/div[4]/section/input',
  authoBTN: '//html/body/div[1]/div[2]/main/div/div/div/div[2]/div[2]/section/div[2]/div/div[2]/div/div/div[2]/div/form/div[2]/button[1]',
  closeModal: '//html/body/div[1]/div[2]/main/div/div/div/div[2]/div[2]/section/div[2]/div/div[2]/div/div/div[2]/div/form/div[2]/button[2]',
  api1: '/html/body/div[1]/div[2]/main/div/div/div/div[2]/div[4]/section/div/div[1]/div/div/div/div/button[3]',

  loginBtn: '//html/body/div[1]/div[2]/header/div/div/div[3]/div/div[1]/button',
  emailField: '//html/body/div[1]/div/div/div[1]/div/div[2]/div/div[2]/form/div[1]/div/div[1]/input',
  passwordField: '//html/body/div[1]/div/div/div[1]/div/div[2]/div/div[2]/form/div[2]/div/div[1]/input',
  signInBtn: '//html/body/div[1]/div/div/div[1]/div/div[2]/div/div[2]/form/button',
  avatarBtn: '//html/body/div[1]/div[2]/header/div/div/div[3]/div/div[1]/button',
  apiKeyProfile: '//html/body/div[1]/div[2]/header/div/div/div[3]/div/div[2]/div/div[2]/div[5]/button/div[2]/p',
  apiCredit: '//html/body/div[1]/div[2]/main/div/div/div[2]/div/div[4]/div/div[2]/div/div[3]/div[1]/div[2]/div/div/div/span',
  tooltipCredits: '//span[@class="chakra-text css-s78ki9" and @aria-describedby]',

  APIKey:'477fc9a5-53ad-4248-84e9-46477dbf7c64',
  emailUsed:'nhien0985@gmail.com',

  //api/v2/addresses
  tryItOut1: '//*[@id="operations-Addresses-AddressController-getCosmosAddress"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputAddress1: '//*[@id="operations-Addresses-AddressController-getCosmosAddress"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[2]/td[2]/input',
  executeBtn1: '//*[@id="operations-Addresses-AddressController-getCosmosAddress"]/div[2]/div/div[3]/button',
  status1: '//*[@id="operations-Addresses-AddressController-getCosmosAddress"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc20
  tryItOut2: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenInfo"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress2: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenInfo"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[2]/td[2]/input',
  executeBtn2: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenInfo"]/div[2]/div/div[3]/button',
  status2: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenInfo"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc20/balances
  tryItOut3: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20Balances"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputAddress3: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20Balances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  removeTokenContract3: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20Balances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[2]/button',
  inputTokenContract3: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20Balances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[1]/input',
  executeBtn3: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20Balances"]/div[2]/div/div[3]/button',
  status3: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20Balances"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc20/transfers
  tryItOut4: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenTransfers"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress4: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputAddress4: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  inputToDate4: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[7]/td[2]/input',
  executeBtn4: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenTransfers"]/div[2]/div/div[3]/button',
  status4: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenTransfers"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc20/holders
  tryItOut5: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenHolders"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress5: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenHolders"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  executeBtn5: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenHolders"]/div[2]/div/div[3]/button',
  status5: '//*[@id="operations-ERC20_Tokens-Erc20TokenController-getErc20TokenHolders"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc721
  tryItOut6: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenInfo"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress6: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenInfo"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[2]/td[2]/input',
  executeBtn6: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenInfo"]/div[2]/div/div[3]/button',
  status6: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenInfo"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc721/instances
  tryItOut7: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721Instance"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress7: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721Instance"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputTokenId7: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721Instance"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  executeBtn7: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721Instance"]/div[2]/div/div[3]/button',
  status7: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721Instance"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc721/balances
  tryItOut8: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenBalances"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputAddress8: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  removeTokenContract8: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[2]/button',
  inputTokenContract8: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[1]/input',
  executeBtn8: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenBalances"]/div[2]/div/div[3]/button',
  status8: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenBalances"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc721/transfers
  tryItOut9: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenTransfers"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputTokenContract9: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputAddress9: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  inputToDate9: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[7]/td[2]/input',
  executeBtn9: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenTransfers"]/div[2]/div/div[3]/button',
  status9: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenTransfers"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc721/holders
  tryItOut10: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenHolders"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress10: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenHolders"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputAddress10: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenHolders"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  executeBtn10: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenHolders"]/div[2]/div/div[3]/button',
  status10: '//*[@id="operations-ERC721_Tokens-Erc721TokenController-getErc721TokenHolders"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //======================================================

  //api/v2/token/erc1155
  tryItOut11: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenInfo"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress11: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenInfo"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[2]/td[2]/input',
  executeBtn11: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenInfo"]/div[2]/div/div[3]/button',
  status11: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenInfo"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc1155/instances
  tryItOut12: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155Instance"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress12: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155Instance"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputTokenId12: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155Instance"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  executeBtn12: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155Instance"]/div[2]/div/div[3]/button',
  status12: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155Instance"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc1155/holders
  tryItOut13: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenHolders"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress13: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenHolders"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputAddress13: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenHolders"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  executeBtn13: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenHolders"]/div[2]/div/div[3]/button',
  status13: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenHolders"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc1155/balances
  tryItOut14: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenBalances"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputAddress14: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  removeTokenContract14: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[2]/button',
  inputTokenContract14: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[1]/input',
  executeBtn14: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenBalances"]/div[2]/div/div[3]/button',
  status14: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenBalances"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/erc1155/transfers
  tryItOut15: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenTransfers"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputTokenContract15: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputAddress15: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  inputToDate15: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[7]/td[2]/input',
  executeBtn15: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenTransfers"]/div[2]/div/div[3]/button',
  status15: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenTransfers"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/cw20
  tryItOut16: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenInfo"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputTokenContract16: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenInfo"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[2]/td[2]/input',
  executeBtn16: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenInfo"]/div[2]/div/div[3]/button',
  status16: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenInfo"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/cw20/balances
  tryItOut17: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20Balances"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputAddress17: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20Balances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  removeTokenContract17: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20Balances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[2]/button',
  inputTokenContract17: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20Balances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[1]/input',
  executeBtn17: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20Balances"]/div[2]/div/div[3]/button',
  status17: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20Balances"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/cw20/transfers
  tryItOut18: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenTransfers"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputTokenContract18: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputAddress18: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  inputToDate18: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[7]/td[2]/input',
  executeBtn18: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenTransfers"]/div[2]/div/div[3]/button',
  status18: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenTransfers"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/cw20/holders
  tryItOut19: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenHolders"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress19: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenHolders"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  //inputAddress19: '//*[@id="operations-ERC1155_Tokens-Erc1155TokenController-getErc1155TokenHolders"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  executeBtn19: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenHolders"]/div[2]/div/div[3]/button',
  status19: '//*[@id="operations-CW20_Tokens-Cw20TokenController-getCw20TokenHolders"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //======================================================

  //api/v2/token/cw721
  tryItOut20: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenInfo"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress20: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenInfo"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[2]/td[2]/input',
  executeBtn20: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenInfo"]/div[2]/div/div[3]/button',
  status20: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenInfo"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/cw721/instances
  tryItOut21: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721Instance"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress21: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721Instance"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputTokenId21: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721Instance"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  executeBtn21: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721Instance"]/div[2]/div/div[3]/button',
  status21: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721Instance"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/cw721/balances
  tryItOut22: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenBalances"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputAddress22: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  removeTokenContract22: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[2]/button',
  inputTokenContract22: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[1]/input',
  executeBtn22: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenBalances"]/div[2]/div/div[3]/button',
  status22: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenBalances"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/cw721/transfers
  tryItOut23: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenTransfers"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputTokenContract23: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputAddress23: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  inputToDate23: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[7]/td[2]/input',
  executeBtn23: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenTransfers"]/div[2]/div/div[3]/button',
  status23: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenTransfers"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/cw721/holders
  tryItOut124: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenHolders"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractAddress24: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenHolders"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputAddress24: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenHolders"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  executeBtn24: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenHolders"]/div[2]/div/div[3]/button',
  status24: '//*[@id="operations-CW721_Tokens-Cw721TokenController-getCw721TokenHolders"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',
  
  //========================================
  //api/v2/token/ibc
  tryItOut25: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenInfoStatistic"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputTokenDenom25: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenInfoStatistic"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[2]/td[2]/input',
  executeBtn25: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenInfoStatistic"]/div[2]/div/div[3]/button',
  status25: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenInfoStatistic"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/ibc/balances
  tryItOut26: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20Balances"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputAddress26: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20Balances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  removeTokenDenom26: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20Balances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[2]/button',
  inputTokenDenom26: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20Balances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[1]/input',
  executeBtn26: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20Balances"]/div[2]/div/div[3]/button',
  status26: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20Balances"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/ibc/transfers
  tryItOut27: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenTransfers"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputTokenDenom27: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputAddress27: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  inputToDate27: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[7]/td[2]/input',
  executeBtn27: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenTransfers"]/div[2]/div/div[3]/button',
  status27: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenTransfers"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/ibc/holders
  tryItOut28: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenHolders"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractDenom28: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenHolders"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  executeBtn28: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenHolders"]/div[2]/div/div[3]/button',
  status28: '//*[@id="operations-IBC_Tokens-ICS20TokenController-getICS20TokenHolders"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

    //========================================
  //api/v2/token/native
  tryItOut29: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenInfoAndStatistic"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputTokenDenom29: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenInfoAndStatistic"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[2]/td[2]/input',
  executeBtn29: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenInfoAndStatistic"]/div[2]/div/div[3]/button',
  status29: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenInfoAndStatistic"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/native/balances
  tryItOut30: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeBalances"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputAddress30: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  removeTokenDenom30: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[2]/button',
  inputTokenDenom30: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeBalances"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/div[2]/div[1]/input',
  executeBtn30: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeBalances"]/div[2]/div/div[3]/button',
  status30: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeBalances"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/native/transfers
  tryItOut31: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenTransfers"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputTokenDenom31: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  inputAddress31: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[5]/td[2]/input',
  inputToDate31: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenTransfers"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[7]/td[2]/input',
  executeBtn31: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenTransfers"]/div[2]/div/div[3]/button',
  status31: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenTransfers"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',

  //api/v2/token/native/holders
  tryItOut32: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenHolders"]/div[2]/div/div[2]/div[1]/div[2]/button',
  inputContractDenom32: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenHolders"]/div[2]/div/div[2]/div[2]/div/table/tbody/tr[4]/td[2]/input',
  executeBtn32: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenHolders"]/div[2]/div/div[3]/button',
  status32: '//*[@id="operations-Native_Tokens-NativeTokenController-getNativeTokenHolders"]/div[2]/div/div[4]/div[2]/div/div/table/tbody/tr/td[1]',
};
