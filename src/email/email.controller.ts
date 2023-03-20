import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
//import { EmailService } from './email.service';
//import { CreateEmailDto } from './dto/create-email.dto';
//import { UpdateEmailDto } from './dto/update-email.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('email')
export class EmailController {
  constructor(
    //private readonly emailService: EmailService,
    private readonly emailService: MailerService,
  ) {}

  @Get()
  async plainTextEmail(@Query('toemail') toemail) {
    try {
      await this.emailService.sendMail({
        to: toemail,
        from: 'confeccionespeyber0410@gmail.com',
        subject: 'Simple Plain Text',
        text: 'Welcome to nestjs email demo',
      });
      return 'succes';
    } catch (error) {
      console.log(error);
      return {
        msg: 'debe colocar un correo receptor',
        error,
      };
    }
  }
}
