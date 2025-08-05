'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, className }: { href: string, label: string, className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className={cn(
          'relative text-sm font-medium transition-colors hover:text-primary',
          isActive ? 'text-primary' : 'text-muted-foreground',
          'after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:origin-center after:scale-x-0 after:transition-transform after:duration-300',
          isActive && 'after:scale-x-100',
          'hover:after:scale-x-100',
          className
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "border-border bg-background/80 backdrop-blur-lg" : "border-transparent bg-background"
    )}>
      <div className="container flex h-16 items-center">
        <div className="mr-auto">
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm">
                {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
                ))}
            </nav>
        </div>
        
        <div className="hidden md:flex items-center ml-6">
            <Button asChild>
            <Link href="/contact">Get a Quote</Link>
            </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4">
                  <Logo />
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X />
                  </Button>
                </div>
                <nav className="flex flex-col gap-6 text-lg mt-8">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} className="py-2" />
                  ))}
                </nav>
                <div className="mt-auto">
                    <Button asChild className="w-full" size="lg">
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
