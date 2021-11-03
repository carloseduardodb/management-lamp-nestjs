import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LampsService } from './lamps.service';
import { CreateLampDto } from './dto/create-lamp.dto';
import { UpdateLampDto } from './dto/update-lamp.dto';

@Controller('lamps')
export class LampsController {
  constructor(private readonly lampsService: LampsService) {}

  @Post()
  create(@Body() createLampDto: CreateLampDto) {
    return this.lampsService.create(createLampDto);
  }

  @Get()
  findAll() {
    return this.lampsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lampsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLampDto: UpdateLampDto) {
    return this.lampsService.update(id, updateLampDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lampsService.remove(id);
  }
}
