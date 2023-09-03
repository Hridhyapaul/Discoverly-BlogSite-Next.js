import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>©2023 Discoverly. All rights reserved.</div>
            <div className='flex justify-end items-center gap-2'>
                <Image className='opacity-60 cursor-pointer' src='/1.png' width={15} height={15} alt=''></Image>
                <Image className='opacity-60 cursor-pointer' src='/2.png' width={15} height={15} alt=''></Image>
                <Image className='opacity-60 cursor-pointer' src='/3.png' width={15} height={15} alt=''></Image>
                <Image className='opacity-60 cursor-pointer' src='/4.png' width={15} height={15} alt=''></Image>
            </div>
        </div>
    );
};

export default Footer;