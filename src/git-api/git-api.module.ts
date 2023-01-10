import { Module } from '@nestjs/common';
import { GitApiController } from './git-api.controller';
import { GitApiService } from './git-api.service';

@Module({
  controllers: [GitApiController],
  providers: [GitApiService],
})
export class GitApiModule {}
