import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { PrismaModule } from 'src/databases/prisma/prisma.module';

@Module({
  controllers: [StatusController],
  providers: [StatusService],
  imports: [PrismaModule]
})
export class StatusModule {}
