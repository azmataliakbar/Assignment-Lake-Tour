"use client";
import './globals.css';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} custom-body`}>
        <header className="header">
          <h1 className="title">TOURISM</h1>
          
          <button 
            className="hamburger" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/lake1" className="nav-link">Lago di Baries</Link>
            <Link href="/lake2" className="nav-link">Saiful Muluk</Link>
            <Link href="/lake3" className="nav-link">Hallstätter See</Link>
            <Link href="/lake4" className="nav-link">Constance</Link>
            <Link href="/lake5" className="nav-link">Ashi</Link>
          </nav>
        </header>
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
