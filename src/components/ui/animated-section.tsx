'use client';
import { ReactNode } from 'react';
import { useScrollAnimation, useMouseMovement } from '@/hooks/use-scroll-animation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'zoomIn' | 'fadeInUp';
  mouseEffect?: boolean;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0, 
  animation = 'fadeIn',
  mouseEffect = false 
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({ delay });
  const { mousePosition, isMoving } = useMouseMovement();

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'slideInLeft':
        return 'animate-slideInLeft';
      case 'slideInRight':
        return 'animate-slideInRight';
      case 'zoomIn':
        return 'animate-zoomIn';
      case 'fadeInUp':
        return 'animate-fadeInUp';
      default:
        return 'animate-fadeIn';
    }
  };

  const getMouseEffectStyle = () => {
    if (!mouseEffect || !isMoving) return {};
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (mousePosition.x - centerX) / centerX;
    const deltaY = (mousePosition.y - centerY) / centerY;
    
    return {
      transform: `perspective(1000px) rotateY(${deltaX * 2}deg) rotateX(${-deltaY * 2}deg)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`}
      style={getMouseEffectStyle()}
    >
      {children}
    </div>
  );
}

interface StaggeredChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'zoomIn' | 'fadeInUp';
}

export function StaggeredChildren({ 
  children, 
  className = '', 
  staggerDelay = 100,
  animation = 'fadeIn'
}: StaggeredChildrenProps) {
  const { elementRef, isVisible } = useScrollAnimation({ delay: 0 });
  
  const childrenArray = Array.isArray(children) ? children : [children];
  
  return (
    <div ref={elementRef} className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? `animate-${animation}` : 'opacity-0'
          }`}
          style={{ 
            animationDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
            animationFillMode: 'forwards'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
} 