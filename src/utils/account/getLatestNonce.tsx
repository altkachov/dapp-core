import { AccountOnNetwork, Nonce } from '@elrondnetwork/erdjs';
import { accountNonceSelector } from 'redux/selectors';
import { store } from 'redux/store';

export function getLatestNonce(account: AccountOnNetwork) {
  const appState = store.getState();
  const currentAccountNonce = accountNonceSelector(appState);
  return currentAccountNonce && !isNaN(currentAccountNonce)
    ? new Nonce(Math.max(currentAccountNonce, account.nonce.valueOf()))
    : account.nonce;
}

export default getLatestNonce;