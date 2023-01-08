import { FC } from 'react';

interface Props {
  IF: any;
  children: React.ReactNode;
};

const Directive: FC<Props> = ({ IF, children }) => {
  return <>{IF ? children : null}</>;
};

export default Directive;
