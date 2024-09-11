import Cookies from 'js-cookie';

export const setTokenToCookies = (token: string) => {
    Cookies.set('access-token', token, { expires: 7 });
}

export const checkTokenInCookies = (): string | undefined => {
    return Cookies.get('access-token');
}
