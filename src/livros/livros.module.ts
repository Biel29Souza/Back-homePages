import { Module } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // ✅ Adiciona aqui
  providers: [LivrosService],
  controllers: [LivrosController]
})
export class LivrosModule {}
