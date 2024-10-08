import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { NotFoundError } from 'src/error';

@Injectable()
export class UsersService {

  constructor(private prismaService: PrismaService){

  };

  create(createUserDto: CreateUserDto) {
    return this.prismaService.users.create({
      data: createUserDto
    });
  };

  findAll() {
    return this.prismaService.users.findMany({
      select:{
        CPF: true,
        name: true,
        corporate_email: true,
        personal_email: true,
        matriculation: true,
        date_of_birth:true,
        createdAt: true,
        sector: true,
        updatedAt: true,
        sex: {
          select: {
            name: true
          }
        },
        status: {
          select: {
            name: true
          }
        },
        subordinates: {
          select: {
            name: true,
            CPF: true
          }
        },
        leader:{
          select: {
            name: true,
            CPF: true
          }
        },
        phone: {
          select: {
            phone: true
          }
        },
        NomenclatureOffice: {
          select:{
            name: true,
            TypeOffice: {
              select: {
                name: true
              }
            }
          }
        }
      }
    });
  }

  async findOne(CPF: string) {
    try{
      return await this.prismaService.users.findUniqueOrThrow({
        where: {
          CPF
        },
        select:{
          CPF: true,
          name: true,
          corporate_email: true,
          personal_email: true,
          matriculation: true,
          date_of_birth:true,
          createdAt: true,
          sector: true,
          updatedAt: true,
          sex: {
            select: {
              name: true
            }
          },
          status: {
            select: {
              name: true
            }
          },
          subordinates: {
            select: {
              name: true,
              CPF: true
            }
          },
          leader:{
            select: {
              name: true,
              CPF: true
            }
          },
          phone: {
            select: {
              phone: true
            }
          },
          NomenclatureOffice: {
            select:{
              name: true,
              TypeOffice: {
                select: {
                  name: true
                }
              }
            }
          }
        }
      });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Usário com o CPF ${CPF} não encontratdo`);
      };
    };
    
  };

  async update(CPF: string, updateUserDto: UpdateUserDto) {
    try{
      return this.prismaService.users.update({
      where: {CPF},
      data: updateUserDto
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Usário com o CPF ${CPF} não encontratdo`);
      };
    };
    
  };

  async remove(CPF: string) {
    try{
      return await this.prismaService.users.delete({
      where:{CPF}
    });
    }catch(error){
      if(error.code === 'P2025'){
        throw new NotFoundError(`Usário com o CPF ${CPF} não encontratdo`);
      };
    };
    
  };
};
