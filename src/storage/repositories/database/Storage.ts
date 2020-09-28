import { Storage } from '../../models';
import { Injectable } from '@nestjs/common';
import { DatabaseRepository as DB, InjectModel } from '@app/core';
import { StorageRepositoryContract } from '../contracts';

@Injectable()
export class StorageRepository extends DB implements StorageRepositoryContract {
  @InjectModel(Storage)
  model: Storage;

  async updateStorageFileMapping(
    StorageIds: any,
    ownerId: any,
    ownerType: any,
  ): Promise<Record<string, any>> {
    const inactiveQuery = this.query();
    await inactiveQuery
      .patch({
        active: 0,
      })
      .where('uuid', 'in', StorageIds);

    const mapQuery = this.query();
    await mapQuery
      .patch({
        active: 1,
        owner_id: ownerId,
        owner_type: ownerType,
      })
      .where('uuid', 'in', StorageIds);

    return;
  }
}
