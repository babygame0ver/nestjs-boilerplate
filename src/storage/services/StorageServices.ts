import { Injectable } from '@nestjs/common';
import { Storage as nestStorage } from '@squareboat/nest-storage';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';

@Injectable()
export class StorageService {
  constructor(private config: ConfigService) {}

  async storeFile(file: any) {
    const hardDisk = nestStorage.disk('hardDisk');
    const { originalname, buffer } = file;
    const filePath = originalname;
    await hardDisk.put(filePath, buffer);
    console.log(await hardDisk.getMetaData(filePath));
    console.log(await hardDisk.missing(filePath));
    console.log(await hardDisk.exists(filePath));
    console.log(await hardDisk.get(filePath));
    console.log(hardDisk.url(originalname));
    console.log(hardDisk.getConfig());
    // await hardDisk
    //   .delete(filePath)
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    const s3 = nestStorage.disk('media');
    await s3.put(originalname, buffer);
    hardDisk.copy(originalname, 'media');
    s3.copy(originalname, 'hardDisk');
  }
}
