// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);

  app.enableCors({
  origin: 'http://localhost:4200',  // local para reconher o frontend
  credentials: true,
  });
 
  const config = new DocumentBuilder()
    .setTitle('API Home Pages')
    .setDescription('API para fornecer dados da página inicial do app de livros')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(` Server working at -> http://localhost:3000`);
  console.log(` Swagger -> http://localhost:3000/api`);
}
bootstrap();