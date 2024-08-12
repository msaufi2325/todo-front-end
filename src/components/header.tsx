import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="font-bold">Todo List</Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        Login
      </NavbarContent>
    </Navbar>
  );
}
