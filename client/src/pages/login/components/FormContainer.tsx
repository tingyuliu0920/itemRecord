import { ReactNode } from 'react';
import homepic from '../../../assets/home.png';

const FormContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col bg-white items-center p-10 pt-12 rounded-lg w-3/4 sm:max-w-[400px]">
      <div className="py-4 w-1/3 max-w-[100px] sm:max-w-[140px]">
        <img src={homepic} alt="" className="w-full" />
      </div>
      {children}
    </div>
  );
};

export default FormContainer;
