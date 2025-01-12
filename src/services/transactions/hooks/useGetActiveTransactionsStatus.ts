import { useSelector } from 'redux/DappProviderContext';
import {
  failedTransactionsSelector,
  pendingSignedTransactionsSelector,
  signedTransactionsSelector,
  successfulTransactionsSelector,
  timedOutTransactionsSelector
} from 'redux/selectors';

interface UseGetActiveTransactionsStatusReturnType {
  pending: boolean;
  timedOut: boolean;
  fail: boolean;
  success: boolean;
  hasActiveTransactions: boolean;
}

//this is a hook to be able to take advantage of memoization offered by useSelector
export function useGetActiveTransactionsStatus(): UseGetActiveTransactionsStatusReturnType {
  const signedTransactions = useSelector(signedTransactionsSelector);
  const timedOutTransactions = useSelector(timedOutTransactionsSelector);
  const failedTransactions = useSelector(failedTransactionsSelector);
  const successfulTransactions = useSelector(successfulTransactionsSelector);
  const pendingTransactions = useSelector(pendingSignedTransactionsSelector);

  const pending = Object.keys(pendingTransactions)?.length > 0;

  const timedOut = !pending && Object.keys(timedOutTransactions)?.length > 0;

  const fail =
    !pending && !timedOut && Object.keys(failedTransactions)?.length > 0;

  const success =
    !pending &&
    !timedOut &&
    !fail &&
    Object.keys(successfulTransactions).length > 0;

  const hasActiveTransactions = Object.keys(signedTransactions).length > 0;
  return {
    pending,
    timedOut,
    fail,
    success,
    hasActiveTransactions
  };
}
