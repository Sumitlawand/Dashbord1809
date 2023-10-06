import React from 'react'
import {Menu} from "antd";
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';

function Sidemenu() {
  return (
    <div className='SideMenu'>
      <Menu
      onClick={()=>{
        // item.key
      }}


      items={[

        {
          label:"Dashbord",
          icon:<AppstoreOutlined />,
          key:"/",
        },
        {
          label:"Inventory",
          icon:<ShopOutlined />,
          Key:"/",
        },
        {
          label:"Order",
          icon:<ShoppingCartOutlined />,
          Key:"/",

        },
        {
         label:"Customers",
         icon:<UserOutlined  />,
         key:"/",
        },
      ]}
      
      >

      </Menu>
    </div>
  )
}

export default Sidemenu