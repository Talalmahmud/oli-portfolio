import React from "react";

type Props = {
  children: React.ReactNode;
};
const PageWrapper = ({ children }: Props) => {
  return (
    <div className=" w-[375px] sm:w-[640px] md:w-[768px] xl:w-[1100px] px-4 xl:px-0 mx-auto">
      {children}
    </div>
  );
};

export default PageWrapper;
