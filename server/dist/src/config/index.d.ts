declare const appConfig: {
    PORT: string;
    database: {
        HOST: string;
        PORT: number;
        USER: string;
        PASSWORD: string;
        NAME: string;
    };
    allowedOrigin: string;
    auth: {
        SALT_OR_ROUNDS: number;
        ACCESS_TOKEN_DURATION: string;
        REFRESH_TOKEN_DURATION: string;
        ACCESS_TOKEN_SECRET_KEY: string;
        REFRESH_TOKEN_SECRET_KEY: string;
    };
};
export default appConfig;
