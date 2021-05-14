export const ITEMS: Item[] = [
    {
        title: "Client contract",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        imagUrl: "/media/icons/privacy.png",
        smallImageUrl: "/media/icons/cog.png",
        type: "Contract",
    },
    {
        title: "Supplier contract",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        imagUrl: "/media/icons/privacy.png",
        smallImageUrl: "/media/icons/cog.png",
        type: "Contract",
    },
    {
        title: "Corporate",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        imagUrl: "/media/icons/entities2.png",
        smallImageUrl: "/media/icons/cog.png",
        type: "Contract",
    },
    {
        title: "Group Norms",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        imagUrl: "/media/icons/publications.png",
        smallImageUrl: "/media/icons/search.png",
        type: "Norms",
    },
    {
        title: "Real estate contracts",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        imagUrl: "/media/icons/privacy.png",
        smallImageUrl: "/media/icons/cog.png",
        type: "Contract",
    }
];

export interface Item {
    title: string;
    backgroundImageUrl: string;
    imagUrl: string;
    smallImageUrl: string;
    type: string;
}
