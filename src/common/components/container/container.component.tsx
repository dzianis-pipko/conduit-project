import React, {PropsWithChildren, ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({children}) => {
  return <div className="container mx-auto">{children}</div>;
};
