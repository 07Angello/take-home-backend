import { Test, TestingModule } from '@nestjs/testing';
import { GitApiController } from './git-api.controller';

describe('GitApiController', () => {
  let controller: GitApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GitApiController],
    }).compile();

    controller = module.get<GitApiController>(GitApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
