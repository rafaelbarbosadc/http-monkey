import React from 'react';
import Link from 'next/link';
import { Card } from 'antd';

const { Meta } = Card;

import { ShareAltOutlined, InfoCircleOutlined } from '@ant-design/icons';

const loadGif = (gif) => {
  gif = gif ? gif : '/images/default.gif';
  return gif;
};

const CustomCard = ({ code, label, gif }) => {
  return (
    <Card
      hoverable
      cover={<img alt={`${code} - ${label}`} src={loadGif(gif)} />}
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
