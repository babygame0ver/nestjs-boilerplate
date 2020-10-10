import { ApiController, Request, Response } from '@app/core';
import {
  Controller,
  Get,
  Req,
  Res,
  Put,
  UseGuards,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { MustBeAuthenticated } from '@app/user';
import { StorageService } from '../services';
import { FileInterceptor } from '@nestjs/platform-express';

UseGuards(MustBeAuthenticated);
@Controller('/storage')
export class StorageController extends ApiController {
  constructor(private storageService: StorageService) {
    super();
  }

  @Post('/local-upload')
  async LocalUpload(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const inputs = req.all();
    return res.success({});
  }

  @Post('/local-file-upload')
  @UseInterceptors(FileInterceptor('image'))
  async LocalFileUpload(@UploadedFile() file) {
    await this.storageService.storeFile(file);
  }
}
