import React, { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div>Navigation</div>
      <main className="xs:bg-gray-239">{children}</main>
      <div>Footer</div>
    </Fragment>
  );
};

export default Layout;
