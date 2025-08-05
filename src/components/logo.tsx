import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="https://i.imgur.com/uV5w229.png" alt="Rathcon Constructions Logo" width={40} height={40} />
      <span className="text-xl font-bold font-headline text-primary">
        Rathcon Constructions
      </span>
    </Link>
  );
}
