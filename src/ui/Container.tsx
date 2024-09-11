import React from 'react'

export const Container = ({ children, className }: { className?: string, children: React.ReactNode}) => {
  return(
    <div className={`sm:px-[40px] px-[10px] pt-[20px] flex flex-col gap-[20px] sm:pb-0 pb-[100px] ${className}`}>
      { children }
    </div>
  )
}