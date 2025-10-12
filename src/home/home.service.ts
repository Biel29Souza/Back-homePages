import { Injectable } from '@nestjs/common';
import { HomeResponse } from './dto/home.dto';

const cover = (t: string) => `https://via.placeholder.com/300x420?text=${encodeURIComponent(t)}`;

@Injectable()
export class HomeService {
  getHomeData(): HomeResponse {
    return {
      categories: [
        {
          title: 'Tecnologia',
          seeMoreLink: '/catalogo?cat=tecnologia',
          books: [
            {
              id: 1,
              title: 'Angular na Prática',
              coverUrl: 'https://d2sofvawe08yqg.cloudfront.net/livro-angular2/s_hero2x?1620503043'
            },
            {
              id: 2,
              title: 'TypeScript – Gerando o JavaScript do Futuro',
              coverUrl: 'https://res.cloudinary.com/total-typescript/image/upload/v1718801512/typescript-essentials_b2myrp.jpg'
            },
            {
              id: 3,
              title: 'Clean Code',
              coverUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg'
            },
            {
              id: 4,
              title: 'Algoritmos',
              coverUrl: 'https://m.media-amazon.com/images/I/51Zymoq7UnL._SX379_BO1,204,203,200_.jpg'
            },
            {
              id: 5,
              title: 'Git & GitHub',
              coverUrl: 'https://m.media-amazon.com/images/I/41as+WafrFL._SX331_BO1,204,203,200_.jpg'
            },
            {
              id: 6,
              title: 'Banco de Dados ',
              coverUrl: 'https://staticbv.bvirtual.com.br/publicacoes/296/thumbs/thumbnail_397_x_595.jpg'
            },
          ]
        },
        {
          title: 'Direito',
          seeMoreLink: '/catalogo?cat=direito',
          books: [
            { id: 7, title: 'Direito Civil', coverUrl: cover('Civil') },
            { id: 8, title: 'Direito Penal', coverUrl: cover('Penal') },
            { id: 9, title: 'Direito do Trabalho', coverUrl: cover('Trabalho') },
            { id: 10, title: 'Direito Tributário', coverUrl: cover('Tributário') },
            { id: 11, title: 'Processo Civil', coverUrl: cover('Proc. Civil') },
            { id: 12, title: 'Constitucional', coverUrl: cover('Constitucional') },
          ],
        },
        {
          title: 'Romance',
          seeMoreLink: '/catalogo?cat=romance',
          books: [
            { id: 13, title: 'A Culpa é das Estrelas', coverUrl: cover('Culpa') },
            { id: 14, title: 'Orgulho e Preconceito', coverUrl: cover('Orgulho') },
            { id: 15, title: 'Querido John', coverUrl: cover('John') },
            { id: 16, title: 'Diário de uma Paixão', coverUrl: cover('Diário') },
            { id: 17, title: 'Um Amor para Recordar', coverUrl: cover('Recordar') },
            { id: 18, title: 'Como Eu Era Antes de Você', coverUrl: cover('Antes') },
          ],
        },
      ],
    };
  }
}
