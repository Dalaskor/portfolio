import { ApiProperty } from '@nestjs/swagger';
import { Action } from '@prisma/client';

export class ActionResponse implements Action {
  @ApiProperty({
    description: 'Action UUID',
    type: String,
    nullable: false,
    example: '23098aa0-6f56-4327-a2e6-2319b18f17e5',
  })
  id: string;

  @ApiProperty({
    description: 'Action name',
    type: String,
    nullable: false,
    example: 'Web Development',
  })
  name: string;

  @ApiProperty({
    description: 'Action name',
    type: String,
    nullable: false,
    example: 'High-quality development of sites at the professional level.',
  })
  description: string;

  @ApiProperty({
    description: 'SVG code for icon',
    type: String,
    nullable: true,
    example: '<svg>svg</svg>',
  })
  svg: string;
}
