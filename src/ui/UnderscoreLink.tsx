import { Link } from 'react-router-dom'

export const UnderscoreLink = ({ link, title, className }: { link: string, title: string, className?: string }) => {
    return(
        <Link to={`${link}`} className={`inline-block relative line-height: 1 text-decoration-none cursor-pointer relative group w-max ${className}`}>
            {title}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
        </Link>
    )
}