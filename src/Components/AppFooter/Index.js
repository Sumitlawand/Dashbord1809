import Typography from 'antd/es/typography/Typography'
import React from 'react'

function Index() {
  return (
    <div className='AppFooter'>
     <Typography.Link href='tel:+123456789'>+123456789</Typography.Link>
     <Typography.Link href='https://fonts.google.com/'>Privacy Policy</Typography.Link>
     <Typography.Link href='https://fonts.google.com/'>Terms and Condition</Typography.Link>
    </div>
  )
}

export default Index