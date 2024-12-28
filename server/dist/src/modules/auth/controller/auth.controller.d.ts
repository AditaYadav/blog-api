import { AuthService } from "src/modules/auth/service/auth.service";
import { LoginDTO, LogoutDTO, RefreshDTO, SignUpDTO } from "src/modules/auth/dto/auth.dto";
import { User } from "src/modules/shared/domain/user/user.entity";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    createUser(body: SignUpDTO): Promise<{
        message: string;
    }>;
    login(body: LoginDTO): Promise<{
        user: {
            email: string;
            name: string;
        };
        auth: {
            accessToken: any;
            refreshToken: any;
        };
    }>;
    logout(body: LogoutDTO): Promise<{}>;
    userInfo(user: User): {
        user: User;
    };
    refresh(body: RefreshDTO): Promise<{
        accessToken: any;
        refreshToken: any;
    }>;
    test(): {
        message: string;
    };
}
