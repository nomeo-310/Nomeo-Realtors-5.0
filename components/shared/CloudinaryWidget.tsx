'use client'

import React from 'react'

type widgetProps = {
  cloudName:string
  uploadPreset:string
  onUpload: (value:{secure_url:string, public_id:string}) => void
  value:{secure_url:string, public_id:string}
}

const CloudinaryWidget = ({cloudName, uploadPreset, onUpload, value}: widgetProps) => {
  const handleUpload = React.useCallback((result:any) => {
    if (result) {
      const singleImage = { secure_url: result.info.secure_url, public_id: result.info.public_id }
      
    }
  },[])
  return (
    <div>
      CloudinaryWidget
    </div>
  )
}

export default CloudinaryWidget