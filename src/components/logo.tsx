import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="Rathcon Constructions Logo" width={60} height={60} />
    </Link>
  );
}
