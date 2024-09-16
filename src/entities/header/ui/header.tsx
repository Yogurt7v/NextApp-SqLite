import Link from "next/link";
import logo from "../../../../public/Logo.svg";
import left from "../../../../public/arrow-left.svg"
import Image from "next/image";

export default function Header({ session }: { session: any }) {
    return (<div className="flex justify-between p-4 items-center">
        <Link href="/">
            <Image src={logo} alt="logo" />
        </Link>
        <div className="flex space-x-4 ">
            {session?.user ?
                <div className="flex space-x-4 items-center">
                    <div>{session?.user?.name}</div>
                    <Image src={left} alt="left" className="w-4 opacity-60" />
                    <Link href="/events/create" className="bg-green-500 hover:bg-green-700 text-white  py-2 px-4 rounded">Создать событие</Link>
                </div>
                : <Link href="/api/auth/signin">Войти</Link>}
        </div>
    </div>)
}