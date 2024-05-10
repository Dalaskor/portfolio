import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import globalConfig from './config/global.config';
import { DatabaseModule } from './modules/database/database.module';
import { ActionModule } from './modules/action/action.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      load: [globalConfig],
      isGlobal: true,
    }),
    DatabaseModule,
    ActionModule,
  ],
  providers: [],
})
export class AppModule {}
