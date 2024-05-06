import React, { ComponentType, ReactNode, useState, FC } from "react";

export default function withCounter<T>(
  Countercomponent: ComponentType<T>,
  countBy: number
) {
  return function InnerCounter(props: any) {
    const [counttt, setCounttt] = useState<number>(0);
    const Incre = () => {
      setCounttt(counttt + countBy);
    };

    const Decre = () => {
      setCounttt(counttt - countBy);
    };
    return (
      <Countercomponent
        {...props}
        handleCounterIncre={Incre}
        handleCounterDecre={Decre}
        counttt={counttt}
      />
    );
  };
}

//export default withCounter;
