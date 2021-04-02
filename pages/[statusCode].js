import React from "react";

const StatusCode = ({ statusCode }) => {
  return <div>{statusCode}</div>;
};

export async function getServerSideProps(context) {
  const { statusCode } = context.query;

  return {
    props: { statusCode },
  };
}

export default StatusCode;
