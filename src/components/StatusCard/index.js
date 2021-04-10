import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import Link from 'next/link';
import { ShareAltOutlined, InfoCircleOutlined } from '@ant-design/icons';

const CustomCard = ({ code, label }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://media.tenor.com/images/adb4c3dfc1552fb064d3d300959b4c56/tenor.gif"
        />
      }
      actions={[
        <Link href={`/${code}`} passHref>
          <InfoCircleOutlined key="info" />
        </Link>,
        <ShareAltOutlined key="share" />,
      ]}
    >
      <Meta title={code} description={label} />
    </Card>
  );
};

export default CustomCard;
