import { Injectable, Inject, HttpService } from '@nestjs/common';
import { Storage as nestStorage } from '@squareboat/nest-storage';
// import { BaseValidator } from '@app/core';
import { v4 as uuidv4 } from 'uuid';
// import { Storage } from '../validators';
import { STORAGE_REPOSITORY } from '../constants';
import { StorageRepository } from '../repositories';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StorageService {
  constructor() // private validator: BaseValidator,
  // @Inject(STORAGE_REPOSITORY)
  // private storageRepo: StorageRepository,
  // private config: ConfigService,
  {}
}
