import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'crypto';
import { Express } from 'express';

@Injectable()
export class S3Service {
  private s3: S3Client;

  constructor() {
    this.s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }

  async uploadFile(file: Express.Multer.File, bucketType: 'users' | 'companies' | 'products'): Promise<string> {
    const bucketName = this.getBucketName(bucketType);
    const fileExtension = file.originalname.split('.').pop();
    const fileName = `${randomUUID()}.${fileExtension}`;

    const uploadParams = {
      Bucket: bucketName,
      Key: fileName,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    await this.s3.send(new PutObjectCommand(uploadParams));

    return `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
  }

  private getBucketName(bucketType: string): string {
    switch (bucketType) {
      case 'users':
        return process.env.AWS_S3_USERS_BUCKET!;
      case 'companies':
        return process.env.AWS_S3_COMPANIES_BUCKET!;
      case 'products':
        return process.env.AWS_S3_PRODUCTS_BUCKET!;
      default:
        throw new Error('Invalid bucket type');
    }
  }
}
