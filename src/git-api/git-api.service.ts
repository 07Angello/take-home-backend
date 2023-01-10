import { Injectable } from '@nestjs/common';

@Injectable()
export class GitApiService {
  getAllCommits() {
    return 'test message';
  }
}
