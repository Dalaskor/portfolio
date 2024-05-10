import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

export class CreateActionDto implements Prisma.ActionCreateInput {
  @ApiProperty({
    description: 'Action name',
    type: String,
    nullable: false,
    example: 'Web Development',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Action name',
    type: String,
    nullable: false,
    example: 'High-quality development of sites at the professional level.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'SVG code for icon',
    type: String,
    nullable: true,
    example: '<svg>svg</svg>',
  })
  @IsString()
  @IsOptional()
  svg?: string = null;
}
