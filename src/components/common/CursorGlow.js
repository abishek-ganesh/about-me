import React, { useState, useEffect, useCallback } from 'react';

/**
 * CursorGlow - A subtle radial gradient that follows the mouse cursor
 * Inspired by brittanychiang.com
 *
 * Features:
 * - Smooth tracking with requestAnimationFrame
 * - Theme-aware colors (respects dark/light mode via CSS variables)
 * - Hidden on mobile/touch devices
 * - Non-interactive (pointer-events: none)
 */
const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check if device is touch-based (hide glow on mobile)
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);

    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // Track mouse movement
  const handleMouseMove = useCallback((e) => {
    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  // Handle mouse enter/leave for visibility
  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Set up event listeners
  useEffect(() => {
    if (isTouchDevice) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Start visible if mouse is already in window
    setIsVisible(true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice, handleMouseMove, handleMouseEnter, handleMouseLeave]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <div
      className="cursor-glow"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--glow-color), transparent 40%)`,
      }}
      aria-hidden="true"
    />
  );
};

export default CursorGlow;
