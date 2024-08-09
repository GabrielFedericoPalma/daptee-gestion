export interface INav {
    id: string,
    title: string,
    value: string,
    link: string
}

export const NavItems:INav[] = [
    {
        id: '0',
        title: 'Usuarios',
        value: 'users',
        link: '/'
    },
    {
        id: '1',
        title: 'Productos',
        value: 'products',
        link: '/products'
    }
]