import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLampDto } from './dto/create-lamp.dto';
import { UpdateLampDto } from './dto/update-lamp.dto';
import { Lamp } from './entities/lamp.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LampsService {

  constructor(@InjectRepository(Lamp) private lampsRepository: Repository<Lamp>){}

  async create(createLampDto: CreateLampDto): Promise<Lamp> {
    createLampDto.id = uuidv4();
    return this.lampsRepository.save(createLampDto);
  }

  async findAll(): Promise<Lamp[]> {
    return this.lampsRepository.find();
  }

  async findOne(id: string): Promise<Lamp> {
    return this.lampsRepository.findOne(id);
  }

  update(id: string, updateLampDto: UpdateLampDto) {
    return this.lampsRepository.update(id, updateLampDto);
  }

  remove(id: string) {
    return this.lampsRepository.delete(id);
  }
}
