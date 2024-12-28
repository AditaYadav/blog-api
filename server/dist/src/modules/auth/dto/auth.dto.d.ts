export declare class SignUpDTO {
    email: string;
    password: string;
    name: string;
}
export declare class LoginDTO {
    email: string;
    password: string;
}
export declare class LogoutDTO {
    refreshToken: string;
}
export declare class RefreshDTO extends LogoutDTO {
}
