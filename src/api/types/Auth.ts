export interface User {
    id: number;
    name: string;
    identification: string;
    username: string;
    email: string;
    phone: string;
    role: string;
    status: boolean;
}
export interface LoginRequests {
    identification: string;
    username: string;
    password: string;
}
export interface LoginResponses {
    status: string;
    data: {
        token: string;
        token_type: string;
        user: User;
    }
    message?: string;
}
