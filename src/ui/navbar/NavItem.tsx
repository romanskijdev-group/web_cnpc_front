import { NavLink } from 'react-router-dom'
// import { useLocation } from 'react-router'

export const NavItem = ({link, title, className}: {link: string, title: string, className?: string}) => {
    // const path = useLocation()
    return (
        <li>
            <NavLink to={link}
               className={`text-lg block py-2 px-3 rounded hover:text-yellow-700 dark:text-gray-300 dark:hover:text-yellow-400 duration-300 ${className}`}
               aria-current="page">{title}</NavLink>
        </li>
    )
}