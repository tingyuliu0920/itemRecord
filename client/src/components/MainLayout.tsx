import { ReactNode } from 'react';
import Heading from './Heading';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex  flex-col items-center w-full min-h-screen bg-orange-200">
      <div className="w-[1000px]">
        <Heading />
        <div className="px-10 pt-6 pb-12">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
