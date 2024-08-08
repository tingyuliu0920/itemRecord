import { ReactNode } from 'react';

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center bg-orange-200 w-screen h-screen">
      {children}
    </div>
  );
};

export default PageLayout;
