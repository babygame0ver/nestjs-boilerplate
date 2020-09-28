import { ApiController, Request, Response } from '@app/core';
import {
  Controller,
  Get,
  Req,
  Res,
  Put,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from '../services';
import { UserDetailTransformer } from '@app/transformer';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('users')
export class UserController extends ApiController {
  constructor(private users: UserService) {
    super();
  }

  @Get('/profile')
  async getProfile(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const user = await this.users.get();
    return res.success(
      await this.transform(user, new UserDetailTransformer(), { req }),
    );
  }

  @Put('/upload-file')
  async uploadFiles(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const inputs = req.all();
    console.log(req);

    return res.success({});
  }

  @Put('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
    return {};
  }
}
