import Link from 'next/link';
import logo from '../../../../public/Logo.svg';
import left from '../../../../public/arrow-left.svg';
import Image from 'next/image';

export interface HeaderProps {
  session: {
    expires: string;
    user: {
      email: string;
      id: number;
      name: string;
    };
  };
}

export default function Header({ session }: HeaderProps) {
  return (
    <div className="flex justify-between items-center p-6 mb-8">
      <Link href="/" className="transition-transform duration-300 hover:scale-105">
        <Image src={logo} alt="logo" className="h-10 w-auto" />
      </Link>
      <div className="flex items-center space-x-4">
        {session?.user ? (
          <div className="flex items-center space-x-4">
            <div className="text-primary-800 font-medium">{session.user.name}</div>
            <Image src={left} alt="left" className="w-4 opacity-60 rotate-180" />
            <Link href="/events/create" className="btn-primary text-sm">
              Создать событие
            </Link>
          </div>
        ) : (
          <Link href="/api/auth/signin" className="btn-secondary text-sm">
            Войти
          </Link>
        )}
      </div>
    </div>
  );
}
