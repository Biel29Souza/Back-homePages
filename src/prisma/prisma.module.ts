import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 🔹 opcional, mas torna o PrismaService disponível globalmente
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 🔹 precisa exportar para outros módulos poderem usar
})
export class PrismaModule {}
