import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import globalConfig from './config/global.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      load: [globalConfig],
      isGlobal: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
