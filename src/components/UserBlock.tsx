import { Button } from '../ui/buttons/Button'
import { setIsAuthenticated } from '../features/redux/user/userSlice'
import { HoverButton } from '../ui/buttons/HoverButton'
import { User } from './User'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../features/redux/store'

export const UserBlock = ({ className } : { className?: string }) => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();
    return(
        <div className={`${className}`}>
            {
                !user.isLoggedIn ? (
                    <>
                        <Button title='Войти' onClick={() => {
                            dispatch(setIsAuthenticated(true))
                        }}></Button>
                        <HoverButton link='/signing' title='Регистрация'></HoverButton>
                    </>
                ) : (
                    <User name="Sansara"/>
                )
            }
        </div>
    )
}