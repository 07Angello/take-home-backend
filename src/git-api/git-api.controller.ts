import { Controller, Get, Param } from '@nestjs/common';
import { GitApiService } from './git-api.service';

@Controller('git-api')
export class GitApiController {
  constructor(private readonly gitApiService: GitApiService) {}

  @Get()
  getAllRepositories() {
    return this.gitApiService.getAllCommits();
  }
}
