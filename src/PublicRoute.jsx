import React from "react";

const PublicRoute = ({ component: Component }, props) => {
  return <Component {...props} />;
};

export default PublicRoute;
