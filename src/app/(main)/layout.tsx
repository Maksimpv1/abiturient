import React, { Children, PropsWithChildren } from "react";

const MainLoyout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {" "}
      <p>типо хедер</p>
      {children}
    </div>
  );
};
export default MainLoyout;
