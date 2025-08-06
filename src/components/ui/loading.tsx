import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-primary/40 rounded-full animate-spin" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-primary/60 rounded-full animate-spin" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Loading Rathcon</h2>
          <p className="text-muted-foreground">Building something amazing...</p>
        </div>
      </div>
    </div>
  );
}

export function LoadingDots() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
    </div>
  );
}

export function LoadingPulse() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 w-12 h-12 bg-primary/40 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}

export function LoadingBar() {
  return (
    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
      <div className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full animate-loading-bar"></div>
    </div>
  );
} 