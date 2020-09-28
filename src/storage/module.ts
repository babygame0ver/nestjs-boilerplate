import { Module } from '@nestjs/common';
import { StorageController } from './controllers';
import { StorageService } from './services';
import { StorageRepository } from './repositories';
import { STORAGE_REPOSITORY } from './constants';
import { StorageModule as StorageDriver } from '@squareboat/nest-storage';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    StorageDriver.registerAsync({
      imports: [ConfigService],
      useFactory: (config: ConfigService) => {
        return config.get('storage');
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [StorageController],
  providers: [
    StorageService,
    { provide: STORAGE_REPOSITORY, useClass: StorageRepository },
  ],
  exports: [StorageService],
})
export class StorageModule {}
