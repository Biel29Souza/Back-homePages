import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeResponse } from './dto/home.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Home')
@Controller('home-pages')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna as categorias e livros da página inicial' })
  @ApiResponse({ status: 200, description: 'Lista de categorias e livros', type: HomeResponse })
  getHome(): HomeResponse {
    return this.homeService.getHomeData();
  }
}
