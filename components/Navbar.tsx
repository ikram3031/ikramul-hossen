"use client"

import Link from 'next/link';
import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const navLinks = [
    { name: 'About', link: '#about' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Stack', link: '#stack' },
    { name: 'Contact', link: '#contact' },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>Navbar</div>
    )
}
