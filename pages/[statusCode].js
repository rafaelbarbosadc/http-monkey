import React from "react";

const StatusCode = ({ statusCode }) => {
  return (
    <div>
      Bem vindo, nesta tela você verá todas as informações relativas ao código
      HTTP {statusCode}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { statusCode } = context.query;

  return {
    props: { statusCode },
  };
}

export default StatusCode;
