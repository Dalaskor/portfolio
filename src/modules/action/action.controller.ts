import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ActionResponse } from './dto/action-response.dto';
import { ActionService } from './action.service';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { ACTION_NOT_FOUND_ERROR } from './constants/error.const';

@Controller('action')
@ApiTags('Action')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new action' })
  @ApiResponse({ status: 201, type: ActionResponse })
  async create(@Body() dto: CreateActionDto): Promise<ActionResponse> {
    return this.actionService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of actions' })
  @ApiResponse({ status: 200, type: ActionResponse, isArray: true })
  async getList(): Promise<ActionResponse[]> {
    return this.actionService.getList();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a action' })
  @ApiResponse({ status: 200, type: ActionResponse })
  @ApiResponse({ status: 404, description: ACTION_NOT_FOUND_ERROR })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateActionDto,
  ): Promise<ActionResponse> {
    return this.actionService.update({ id }, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a action' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, description: ACTION_NOT_FOUND_ERROR })
  async delete(@Param('id') id: string): Promise<void> {
    await this.actionService.delete({ id });
  }
}
