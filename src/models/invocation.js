export const invokeTransaction = (
  dappAddress,
  senderPublicKey,
  func,
  args
) => {
  return {
    type: 16,
    data: {
      dappAddress,
      senderPublicKey,
      payment: [{
        amount: 100000,
        assetId: 'WAVES'
      }],
      call: {
        function: func,
        args: args
      },
      fee: {
        assetId: 'WAVES',
        coins: 500000
      }
    }
  }
}
