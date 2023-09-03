import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {

    const links = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio",
        },
        {
            id: 3,
            title: "Blog",
            url: "/blog",
        },
        {
            id: 4,
            title: "About",
            url: "/about",
        },
        {
            id: 5,
            title: "Contact",
            url: "/contact",
        },
        {
            id: 6,
            title: "Dashboard",
            url: "/dashboard",
        },
    ];

    return (
        <div className='flex justify-between py-6'>
            <Link href="/" className='text-lg font-semibold'>Discoverly</Link>
            <div className={styles.navbar}>
                {links.map(link => (
                    <Link href={link.url} key={link.id} className='font-semibold'>{link.title}</Link>
                ))}

                <button className='px-[10px] py-1 rounded-md text-black font-semibold bg-[#53c28b]'>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;