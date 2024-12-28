import {
  Injectable,
  ForbiddenException,
  BadRequestException,
} from "@nestjs/common";
import { UserSessionRepository } from "src/modules/shared/domain/user-session/user-session.repository";
import { User } from "src/modules/shared/domain/user/user.entity";
import { UserRepository } from "src/modules/shared/domain/user/user.repository";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "src/modules/shared/util/jwt";
import * as PasswordUtil from "src/modules/shared/util/password"
@Injectable()
export class AuthService {
  async signUp(user: any) {
    const existingUser = await UserRepository.findOne({
      where: { email: user.email },
    });

    if (existingUser) {
      throw new BadRequestException("Email already in use");
    }

    const hashedPassoword = await PasswordUtil.hash(user.password);

    // Create new user
    const data = UserRepository.create({
      email: user.email,
      password: hashedPassoword,
      Name: user.name,
    });

    await UserRepository.save(data);

    // Generate token and return
    // const auth = await this.generateUserAuthTokens(data);

    return { message: "User created successfully!" };
  }

  async signIn(email: string, password: string) {
    const user = await UserRepository.findOne({
      where: [{ email: email }],
    });

    if (!user) {
      throw new BadRequestException("Invalid credentials");
    }

    const isPasswordMatch = await PasswordUtil.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new BadRequestException("Invalid credentials");
    }

    // Generate token and return
    const auth = await this.generateUserAuthTokens(user);

    const data = {
      email: user.email,
      name : user.Name
    };

    return { user: data, auth };
  }

  async logout(refreshToken: string) {
    const session = await UserSessionRepository.findOne({
      where: { token: refreshToken, isActive: true },
    });

    if (!session) {
      throw new BadRequestException();
    }

    session.isActive = false;

    await UserSessionRepository.save(session);
  }

  async refresh(token: string) {
    try {
      const data = verifyRefreshToken(token);
      const { email } = data as any;

      const session = await UserSessionRepository.findOne({
        where: { token },
      });

      const user = await UserRepository.findOne({ where: { email } });

      if (!session || !user) {
        throw new Error("Forbidden");
      }

      if (session && !session.isActive) {
        // Revoke all session for user
        await UserSessionRepository.update(
          { userId: user.id },
          { isActive: false }
        );

        throw new Error("Forbidden");
      }

      session.isActive = false;
      await UserSessionRepository.save(session);

      const auth = await this.generateUserAuthTokens(user);

      return auth;
    } catch (err) {
      throw new ForbiddenException();
    }
  }

  private async generateUserAuthTokens(user: User) {
    const refreshToken = generateRefreshToken(user.email);
    const accessToken = generateAccessToken(user.email);

    // TODO: Fix duration
    const expiresAt = new Date();

    const userSession = UserSessionRepository.create({
      token: refreshToken,
      expiresAt: expiresAt,
      userId: user.id,
      isActive: true,
    });

    await UserSessionRepository.save(userSession);

    return { accessToken, refreshToken };
  }
}
