"use client"

import Image from "next/image";
import React, { useEffect, useState } from 'react'

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: () => void;
}

const Button = ({ type, title, icon, variant, full, onClick, }: ButtonProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} `}
      type={type}
      onClick={isClient ? handleClick : undefined}
      style={{
      'background-color':'#B29241',
      'width':'250px',
      'height':'40px',
      "color":'#282828'
      }}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button
