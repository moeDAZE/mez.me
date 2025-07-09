import { usePathname } from "next/navigation"
import { NAV_LINKS } from '@/constants/navLink'
import Link from "next/link"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-2'>
        {NAV_LINKS.map((link) => {
          const isActive = link.href === pathname

          return (
            <li key={link.label} className='mx-4 relative flex h-[60px] items-center justify-center text-gray-500 hover:text-gray-900'>
              <Link
                href={link.href}
              >
                {link.label}
              </Link>
              {isActive && (
                <>
                </>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar