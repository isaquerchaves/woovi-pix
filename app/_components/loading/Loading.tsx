import React from "react";
import ReactLoading from "react-loading";
import { LoadingContainer } from "./Loading.style";

const Loading = () => {
  return (
    <LoadingContainer>
      <ReactLoading type="bars" color="#03d69d" height="80px" width="80px" />
    </LoadingContainer>
  );
};

export default Loading;
