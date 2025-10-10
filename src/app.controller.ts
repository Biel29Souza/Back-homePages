// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }


import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  redirectToSwagger(@Res() res: Response) {
    res.redirect('/api'); 
  }
}
