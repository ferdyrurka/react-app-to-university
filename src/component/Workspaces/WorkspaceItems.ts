export const ITEMS: Item[] = [
    {
        title: "Client contract",
        slug: "client-contract",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        headerImageUrl: "https://via.placeholder.com/1280x120/0000FF/808080",
        imagUrl: "/media/icons/privacy.png",
        smallImageUrl: "/media/icons/cog.png",
        type: "Contract",
    },
    {
        title: "Supplier contract",
        slug: "supplier-contract",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        headerImageUrl: "https://via.placeholder.com/1280x120/0000FF/808080",
        imagUrl: "/media/icons/privacy.png",
        smallImageUrl: "/media/icons/cog.png",
        type: "Contract",
    },
    {
        title: "Corporate",
        slug: "corporate",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        headerImageUrl: "https://via.placeholder.com/1280x120/0000FF/808080",
        imagUrl: "/media/icons/entities2.png",
        smallImageUrl: "/media/icons/cog.png",
        type: "Contract",
    },
    {
        title: "Group Norms",
        slug: "group-norms",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        headerImageUrl: "https://via.placeholder.com/1280x120/0000FF/808080",
        imagUrl: "/media/icons/publications.png",
        smallImageUrl: "/media/icons/search.png",
        type: "Norms",
    },
    {
        title: "Real estate contracts",
        slug: "real-estate-contracts",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        headerImageUrl: "https://via.placeholder.com/1280x120/0000FF/808080",
        imagUrl: "/media/icons/privacy.png",
        smallImageUrl: "/media/icons/cog.png",
        type: "Contract",
    }
];

export interface Item {
    title: string,
    slug: string,
    backgroundImageUrl: string,
    headerImageUrl: string,
    imagUrl: string,
    smallImageUrl: string,
    type: string,
}
