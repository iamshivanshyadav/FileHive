import axios from 'axios';
import React from 'react'
import {GetServerSidePropsContext, NextPage } from "next";
import { IFile } from 'libs/types';
import RenderFile from '@components/RenderFile';
import fileDownload from 'js-file-download';

const index: NextPage<{
    file: IFile;
}> = ({ file: { format, name, sizeInBytes, id } }) => {
    

    const handleDownload = async () => { 
        const { data } = await axios.get(`api/files/${id}/download`, {
            responseType: "blob",
        });
        fileDownload(data, name);
 }





    return (
        <div className='flex flex-col items-center justify-center py-3 space-y-4 bg-gray-800 rounded-md shadow-xl'>
            {
                !id ? <span>Oops! File does not exist! check the URL</span>
                    : <>
                        

                        <img src="/images/file-download.png" alt="" className='w-16 h-16'/>
                        <h1 className="text-xl">Your file is ready to download</h1>
                        <RenderFile file={{ format, name, sizeInBytes }} />
                        <button className='button' onClick={handleDownload}>Download</button>
                    </>
            }
        </div>
    );
}

export default index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.query;
    let file;
    try {
        const { data } = await axios.get(`${process.env.BASE_URL}api/files/${id}`)
        file = data;
    } catch (error) {
        console.log(error.response.data);
        file = {};
    }
    return {
        props: {
            file,
        },
    }
}
