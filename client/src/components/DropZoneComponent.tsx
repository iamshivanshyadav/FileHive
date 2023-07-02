import React, {Dispatch, FunctionComponent, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
const DropZoneComponent:FunctionComponent <{setFile:Dispatch<any>}>= ({setFile}) => {

  const onDrop=useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      setFile(acceptedFiles[0]);
  },[],
)


  const { getRootProps,isDragAccept, getInputProps,isDragReject } = useDropzone({
    onDrop,
    multiple: false,
  accept: {
      'image/*': ['.jpeg', '.png', '.jpg', '.gif'],
      'audio/*': ['.mp3', '.ogg', '.mpeg'],
      'text/*': ['.txt'],
    },
  });

  return (
    <div className="p-4 w-full">
    <div {...getRootProps()} className="w-full h-80 rounded-md cursor-pointer focus:outline-none">
        <input {...getInputProps()} />

        <div
          className={
            "flex flex-col items-center justify-center h-full space-y-3 border-2 border-black border-dashed  rounded-xl"
            +
            (isDragReject ===true ? ("border-2 border-dashed border-red-500 rounded-xl") : " ") +
            (isDragAccept ===true ? ("border-2 border-dashed border-green-500 rounded-xl"): " ")
        }
        >
          <img src="/images/folder.png" alt="folder" className="h-16 w-16" />
          {
            isDragReject ? (<p>Sorry, This is only supports images and mp3 files.</p>) :
              (<>
                <p>Drag & Drop Files Here</p>
          <p>Supported Files-Images, Audio Only</p>
              </>
              )
          }
          
        </div>

        
      </div>
  </div>
  );
  
}

export default DropZoneComponent;