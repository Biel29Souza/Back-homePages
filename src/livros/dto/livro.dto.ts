import { IsEnum, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { StatusLivro } from '@prisma/client';

export class LivroDto {
  @IsOptional()
  idLivro?: number;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  titulo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(15)
  isbn?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  autor?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  editora?: string;

  @IsOptional()
  @IsInt()
  anoPublicacao?: number;

  @IsOptional()
  @IsInt()
  paginas?: number;

  @IsOptional()
  @IsEnum(StatusLivro)
  status?: StatusLivro;
}
