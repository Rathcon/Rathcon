'use client';
import { useState, useEffect } from 'react';
import { LoadingSpinner, LoadingBar } from './loading';

interface LoadingWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export function LoadingWrapper({ children, delay = 2000 }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [delay]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-background">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
          {/* Logo or Brand */}
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-primary/40 rounded-full animate-spin" style={{ animationDelay: '0.1s' }}></div>
              <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-primary/60 rounded-full animate-spin" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">Rathcon</h1>
              <p className="text-muted-foreground">Construction Excellence</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 space-y-2">
            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Loading...</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Building something amazing...</p>
            <div className="flex items-center justify-center space-x-1">
              <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 