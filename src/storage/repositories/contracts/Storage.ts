import { RepositoryContract } from '@app/core';

export interface StorageRepositoryContract extends RepositoryContract {
  updateStorageFileMapping(
    StorageIds: any,
    ownerId: any,
    ownerType: any,
  ): Promise<Record<string, any>>;
}
