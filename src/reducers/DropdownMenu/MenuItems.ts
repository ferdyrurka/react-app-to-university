const ITEMS: MenuSectionItems[] = [
    {
        title: 'Platform',
        items: [
            {
                icon: '/media/icons/house.png',
                title: 'Home',
                href: 'test',
                description: '',
            },
            {
                icon: '/media/icons/publications.png',
                title: 'Publications',
                href: 'test',
                description: '',
            },
            {
                icon: '/media/icons/people.png',
                title: 'People',
                href: 'test',
                description: '',
            },
            {
                icon: '/media/icons/entities2.png',
                title: 'Entities',
                href: 'test',
                description: '',
            },
            {
                icon: '/media/icons/administration.png',
                title: 'Administration',
                href: 'test',
                description: '',
            },
        ]
    },
    {
        title: 'Workspaces',
        items: [
            {
                icon: '/media/icons/privacy.png',
                title: 'Client contract',
                href: 'test',
                description: '',
            },
            {
                icon: '/media/icons/privacy.png',
                title: 'Supplier contract',
                href: 'test',
                description: '',
            },
            {
                icon: '/media/icons/entities2.png',
                title: 'Corporate',
                href: 'test',
                description: '',
            },
            {
                icon: '/media/icons/publications.png',
                title: 'Group Norms',
                href: 'test',
                description: '',
            },
            {
                icon: '/media/icons/privacy.png',
                title: 'Real estate contracts',
                href: 'test',
                description: '',
            },
        ]
    },
    {
        title: 'Account',
        items: [
            {
                icon: '/media/icons/privacy.png',
                title: 'Your profile',
                href: 'profile',
                description: 'See profile',
            },
            {
                icon: '/media/icons/privacy.png',
                title: 'Privacy',
                href: 'test',
                description: '',
            },
            {
                icon: '/media/icons/settings.png',
                title: 'Settings',
                href: 'test',
                description: '',
            },
        ]
    },
];

export interface MenuSectionItems {
    title: string,
    items: MenuItem[],
}

export interface MenuItem {
    icon: string,
    title: string,
    href: string,
    description: string,
}

export class MenuItems
{
    public static getAll(): MenuSectionItems[]
    {
        return ITEMS;
    }

    public static findByTitle(
        title: string
    ): MenuSectionItems[]  {
        title = title.toLowerCase();

        const foundSectionItems: MenuSectionItems[] = [];

        ITEMS.forEach((section) => {
            const foundItems: MenuItem[] = [];

            section.items.forEach((item) => {
                if (item.title.toLowerCase().indexOf(title) > -1) {
                    foundItems.push(item);
                }
            });

            if (foundItems.length > 0) {
                foundSectionItems.push({
                    title: section.title,
                    items: foundItems,
                });
            }
        });

        return foundSectionItems;
    }
}