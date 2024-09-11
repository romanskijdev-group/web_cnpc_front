import { Navigation } from '../components/mainPage/navbar/Navigation.tsx'
import '../assets/background.css'
import { Banner } from '../components/mainPage/ft_page/Banner.tsx'
import { CreatedWith } from '../components/mainPage/created_with/CreatedWith.tsx'
import { About } from '../components/mainPage/about_project/About.tsx'
import { Capability } from '../components/mainPage/about_project/Capability.tsx'
import { Footer } from '../components/mainPage/footer/Footer.tsx'
import { Contacts } from '../components/mainPage/contacts/Contacts.tsx'

const MainPage = () => {
    return(
        <div className='pt-5'>
            <div className='background bg-white dark:bg-gray-900'>
                <span className='-z-1'></span>
                <span className='-z-1'></span>
                <span className='-z-1'></span>
                <span className='-z-1'></span>
                <span className='-z-1'></span>
                <span className='-z-1'></span>
            </div>
            <Navigation></Navigation>
            <Banner></Banner>
            <CreatedWith></CreatedWith>
            <About></About>
            <Capability></Capability>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    )
}

export default MainPage