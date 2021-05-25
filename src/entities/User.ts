export interface IUser {
    id: number;

    name: string;

    email: string;

    phone: string;

    address: { city: string };

    company: { catchPhrase: string, name: string };

    avatarUrl: string | null;
}
