import React from 'react'

const DownloadFile = ({dowloadPageLink}) => {
  return (
      <div className="p-1">
          <h1 className='my-2 text-lg font-medium'>
             Your file has uploaded 
          </h1>
          <div className="flex space-x-3">
        <span className="break-all">{dowloadPageLink}</span>
        
        <img
          src="/images/copy.png"
          alt=""
          className="object-conatin w-8 h-8 cursor-pointer"
          onClick={()=> navigator.clipboard.writeText(dowloadPageLink)}
    
        />
      </div>
      <br/> Download the by copying the link.
    </div>
  )
}

export default DownloadFile