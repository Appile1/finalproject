"use client";
import React from "react";
import { useUser, SignOutButton, UserButton } from "@clerk/nextjs";
import "./header.css";
import Link from "next/link";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Networking Hub</div>
        <nav className="nav">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/reviews" className="nav-link">
            Reviews
          </a>
          <a href="/profile" className="nav-link">
            Profile
          </a>
          {isSignedIn ? (
            <>
              <Link href="/dashboard" className="nav-link">
                Dashboard
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/signin" className="nav-link">
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
