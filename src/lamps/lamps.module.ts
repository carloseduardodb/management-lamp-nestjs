import { Module } from '@nestjs/common';
import { LampsService } from './lamps.service';
import { LampsController } from './lamps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lamp } from './entities/lamp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lamp])],
  controllers: [LampsController],
  providers: [LampsService]
})
export class LampsModule {}
