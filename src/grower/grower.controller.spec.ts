import { Test, TestingModule } from '@nestjs/testing';
import { GrowerController } from './grower.controller';

describe('Grower Controller', () => {
  let controller: GrowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrowerController],
    }).compile();

    controller = module.get<GrowerController>(GrowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
