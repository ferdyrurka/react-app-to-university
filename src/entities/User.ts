export interface User {
    id: number;

    name: string;

    email: string;

    company: { catchPhrase: string };

    avatarUrl: string | null;
}
