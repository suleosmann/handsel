import localFont from 'next/font/local'

export const gillSans = localFont({
    src: [
        {
            path: '/public/fonts/gill-sans.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '/public/fonts/gill-sans-italic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '/public/fonts/gill-sans-light.otf',
            weight: '300',
            style: 'normal',
        },
    ],
    variable: '--font-gill-sans'
})