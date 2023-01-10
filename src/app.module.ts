import { Module } from '@nestjs/common';
import { GitApiModule } from './git-api/git-api.module';

@Module({
  imports: [GitApiModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
