import React, { useState } from 'react';
import logoImage from '../assets/images/al_shifaa_logo_1786697004506.jpg';

interface AlShifaaLogoProps {
  className?: string;
  variant?: 'full' | 'icon-only' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  hideSubtitle?: boolean;
}

export const AlShifaaLogo: React.FC<AlShifaaLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Proportional sizing preserving 100% exact 1:1 square ratio of the brand logo
  const dimensionClasses = {
    sm: 'h-12 w-12 sm:h-14 sm:w-14',
    md: 'h-16 w-16 sm:h-20 sm:w-20',
    lg: 'h-24 w-24 sm:h-28 sm:w-28',
    xl: 'h-36 w-36 sm:h-44 sm:w-44',
    '2xl': 'h-48 w-48 sm:h-56 sm:w-56',
  };

  const [imgSrc, setImgSrc] = useState<string>(logoImage);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  const fallbackList = [
    logoImage,
    '/al-shifaa-logo.png',
    '/al-shifaa-logo.jpg',
    '/logo.png',
  ];

  const handleImageError = () => {
    const nextIndex = fallbackIndex + 1;
    if (nextIndex < fallbackList.length) {
      setFallbackIndex(nextIndex);
      setImgSrc(fallbackList[nextIndex]);
    }
  };

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}
      title="Al Shifaa Care Home Limited"
    >
      <img
        src={imgSrc}
        alt="Al Shifaa Care Home Limited"
        className={`${dimensionClasses[size]} object-contain rounded-2xl bg-white p-1 shadow-sm transition-transform duration-200 hover:scale-[1.02]`}
        loading="eager"
        decoding="sync"
        onError={handleImageError}
      />
    </div>
  );
};
