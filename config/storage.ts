import { registerAs } from '@nestjs/config';

export default registerAs('storage', () => ({
  default: 'docs',
  disks: {
    media: {
      driver: 's3',
      bucket: process.env.AWS_S3_MEDIA_BUCKET,
      key: process.env.AWS_KEY,
      secret: process.env.AWS_SECRET,
      region: process.env.AWS_REGION,
    },
    fileSystem: {
      driver: 'local',
      baseUrl: '',
    },
  },
}));
