import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Post, 
    Put, 
    ParseIntPipe 
  } from '@nestjs/common';
  import { LivrosService } from './livros.service';
  import { LivroDto } from './dto/livro.dto';
  import { ApiTags, ApiOperation } from '@nestjs/swagger';
  
  @ApiTags('Livros')
  @Controller('livros')
  export class LivrosController {
    constructor(private readonly livrosService: LivrosService) {}
  
    @Get()
    @ApiOperation({ summary: 'Lista todos os livros' })
    findAll() {
      return this.livrosService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Busca um livro pelo ID' })
    // ✅ Usamos ParseIntPipe para garantir que o parâmetro é convertido para number automaticamente
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.livrosService.findOne(id);
    }
  
    @Post()
    @ApiOperation({ summary: 'Cria um novo livro' })
    // ✅ Tipagem correta do corpo como LivroDto
    create(@Body() data: LivroDto) {
      return this.livrosService.create(data);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Atualiza um livro existente' })
    // ✅ Mesma correção com ParseIntPipe e tipagem consistente
    update(@Param('id', ParseIntPipe) id: number, @Body() data: LivroDto) {
      return this.livrosService.update(id, data);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Exclui um livro' })
    // ✅ Mesmo padrão para exclusão
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.livrosService.remove(id);
    }
  }
  