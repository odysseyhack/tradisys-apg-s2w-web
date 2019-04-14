// Waves object, provided by WavesKeeperExtension globally.
// The main feature, is that Waves object injects to page not instantly.
// Sometimes it happens, sometimes not.
//
// Here, Waves is simple get function and returns object on demand.
export const Setup = () => {
  let waves
  let injected = false
  return () => {
    if (injected) {
      return waves
    }
    // Kinda like interface with mixed global Waves object:
    waves = {
      auth () {
      },
      signAndPublishTransaction () {
      },
      signTransactionPackage () {
      },
      signTransaction () {
      },
      signDataTransaction () {
      },
      publicState () {
      },
      ...window.Waves
    }
    injected = true

    return waves
  }
}

// Here, Waves is closure, with lazy value initialized inside.
export const Waves = Setup()

export const auth = async data => Waves()
  .auth(data)

export const publicState = async () => Waves()
  .publicState()

export const signTransaction = async tx => Waves()
  .signTransaction(tx)

export const signAndPublishTransaction = async tx => Waves()
  .signAndPublishTransaction(tx)

export const signTransactionPackage = async txs => Waves()
  .signTransactionPackage(txs)
