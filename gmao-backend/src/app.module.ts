import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { UserSchema } from './user/schema/user.schema';
import { GroupSchema } from './user/schema/group.schema';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UserModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }, { name: 'Group', schema: GroupSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
