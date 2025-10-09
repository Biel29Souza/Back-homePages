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
            { id: 1, title: 'Angular na Prática', coverUrl: cover('Angular') },
            { id: 2, title: 'TypeScript Essencial', coverUrl: cover('TS') },
            { id: 3, title: 'Clean Code', coverUrl: cover('Clean Code') },
            { id: 4, title: 'Algoritmos', coverUrl: cover('Algoritmos') },
            { id: 5, title: 'Git & GitHub', coverUrl: cover('Git') },
            { id: 6, title: 'Banco de Dados', coverUrl: cover('SQL') },
          ],
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
