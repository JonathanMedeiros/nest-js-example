import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Get()
    all(@Res() res: Response): Response<Event[]> {
        const data = this.authService.login();
        return res.status(HttpStatus.OK).json(data);
    }
}
