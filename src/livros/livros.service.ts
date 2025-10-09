import { Injectable, NotFoundException } from '@nestjs/common';
import { LivroDto } from './dto/livro.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LivrosService {
  constructor(private readonly prisma: PrismaService) {}

  // ✅ Lista todos os livros
  async findAll() {
    return this.prisma.livro.findMany();
  }

  // ✅ Busca um livro específico
  async findOne(id: number) {
    // ⚠️ Atenção: campo "idLivro" precisa existir no Prisma schema!
    const livro = await this.prisma.livro.findUnique({
      where: { idLivro: id },
    });

    if (!livro) {
      // ✅ Boa prática: lançar exceção amigável caso o registro não exista
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }

    return livro;
  }

  // ✅ Cria um novo livro
  async create(data: LivroDto) {
    // ⚠️ Certifique-se de que os nomes dos campos do DTO batem com o schema do Prisma
    return this.prisma.livro.create({
      data,
    });
  }

  // ✅ Atualiza um livro existente
  async update(id: number, data: LivroDto) {
    // ✅ Verifica se existe antes de atualizar (boa prática)
    await this.findOne(id);

    return this.prisma.livro.update({
      where: { idLivro: id },
      data,
    });
  }

  // ✅ Remove um livro
  async remove(id: number) {
    // ✅ Verifica se existe antes de deletar
    await this.findOne(id);

    return this.prisma.livro.delete({
      where: { idLivro: id },
    });
  }
}
