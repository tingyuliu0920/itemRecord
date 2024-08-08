import { ReactNode } from 'react';
import Heading from './Heading';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex  flex-col items-center w-full min-h-screen bg-orange-200">
      <div className="sm:max-w-[1000px] w-full">
        <Heading />
        <div className="px-4  pt-2 sm:px-10 sm:pt-6 pb-12">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
