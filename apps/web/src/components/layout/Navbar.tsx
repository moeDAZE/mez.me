import { usePathname } from "next/navigation"
import { NAV_LINKS } from '@/constants/navLink'
import Link from "next/link"
import { cn } from "@/utils/cn"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-2'>
        {NAV_LINKS.map((link) => {
          const isActive = link.href === pathname

          return (
            <li key={link.label} className='relative flex h-[60px] items-center justify-center'>
              <Link
                className={cn('rounded-sm px-3 py-2 text-sm font-medium transition-colors', {
                  'text-muted-foreground hover:text-foreground': !isActive,
                  'text-foreground': isActive
                })}
                href={link.href}
              >
                {link.label}
              </Link>
              {isActive && (
                <>
                  <div className='bg-nav-link-indicator absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2' />
                  <div className='absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 rounded-[4px] bg-[rgb(255_122_151)] blur-sm dark:bg-[rgb(223_29_72)]' />
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