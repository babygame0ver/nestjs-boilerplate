import { ApiController, Request, Response } from '@app/core';
import {
  Controller,
  Get,
  Req,
  Res,
  Put,
  UseGuards,
  Post,
} from '@nestjs/common';
import { MustBeAuthenticated } from '@app/user';
import { StorageService } from '../services';

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
}
