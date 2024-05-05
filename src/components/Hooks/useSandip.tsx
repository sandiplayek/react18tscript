import { useState } from "react";
type sandipHook = [
  count: number,
  increment: () => void,
  decremet: () => void
];
export default function useSandip(vvv: number): sandipHook {
  let [countt, setCountt] = useState<number>(vvv);
  const incrementt = (): void => {
    setCountt(countt + 1);
  };
  const decrementt = (): void => {
    setCountt(countt - 1);
  };
  return [countt, incrementt, decrementt];
}
