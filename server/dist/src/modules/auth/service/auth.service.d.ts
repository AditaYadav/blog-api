export declare class AuthService {
    signUp(user: any): Promise<{
        message: string;
    }>;
    signIn(email: string, password: string): Promise<{
        user: {
            email: string;
            name: string;
        };
        auth: {
            accessToken: any;
            refreshToken: any;
        };
    }>;
    logout(refreshToken: string): Promise<void>;
    refresh(token: string): Promise<{
        accessToken: any;
        refreshToken: any;
    }>;
    private generateUserAuthTokens;
}
