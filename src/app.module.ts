import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LivrosModule } from './livros/livros.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // carrega .env
    LivrosModule, // módulo de livros
  ],
  providers: [PrismaService], // registra o serviço do Prisma
})
export class AppModule {}
