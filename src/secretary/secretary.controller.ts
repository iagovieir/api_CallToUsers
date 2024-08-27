import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SecretaryService } from './secretary.service';
import { CreateSecretaryDto } from './dto/create-secretary.dto';
import { UpdateSecretaryDto } from './dto/update-secretary.dto';

@Controller('secretary')
export class SecretaryController {
  constructor(private readonly secretaryService: SecretaryService) {}

  @Post()
  create(@Body() createSecretaryDto: CreateSecretaryDto) {
    return this.secretaryService.create(createSecretaryDto);
  }

  @Get()
  findAll() {
    return this.secretaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secretaryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSecretaryDto: UpdateSecretaryDto) {
    return this.secretaryService.update(+id, updateSecretaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secretaryService.remove(+id);
  }
}
