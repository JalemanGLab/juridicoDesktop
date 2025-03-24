export interface User {
    id: number;
    name: string;
    username: string;
    identification: string;
    email: string;
    email_verified_at: string;
    phone: string;
    role: string;
    status: number;
    created_at: string;
    updated_at: string;
}
export interface LoginRequests {
    identification: string;
    email: string;
    password: string;
}
export interface LoginResponses {
    status: string;
    access_token: string;
    token_type: string;
    expires_in: number;
    user: User;
    message?: string;
}
