'use client';
import { useState, useEffect } from 'react';

// Define the breakpoint for what constitutes a mobile device
const MOBILE_BREAKPOINT = 768; // Corresponds to Tailwind's 'md' breakpoint

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This function will be called on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Set the initial value on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return isMobile;
}