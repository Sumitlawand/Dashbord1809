import React from 'react'
import {  Badge, Image,Space, Typography } from 'antd'
import { MailOutlined ,  BellFilled } from '@ant-design/icons';
function Head() {
  return (
    <div className='AppHeader'>
      <Image width={150} src='https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg'></Image>
      <Typography.Title>Adobe Dashbord</Typography.Title>
      <Space>
        <Badge count={10}>    
    
    <MailOutlined style={{fontSize: 24}} />
    </Badge>
    <Badge count={20} dot>
    <BellFilled style={{fontSize: 24}} />
    </Badge>    
    </Space>
    </div>
  )
}

export default Head  