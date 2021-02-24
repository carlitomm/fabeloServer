import { AdminService } from './../service/admin.service';

import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { Iadmin } from 'src/modules/model/admin.interface';

@Controller('admin')
export class AdminController {
    constructor(private service: AdminService) { }

    @Post()
    add(@Body() data: Iadmin): any {
        return this.service.save(data)
    }

    @Post('login')
    login(@Body() data: any): any {
        return this.service.login(data.username, data.pass)
    }

    @Get()
    get(): any {
        return this.service.finAll();
    }

    @Get(':id')
    getOne(@Param() params): any {
        return this.service.findOne(params.id);
    }

    @Put(':id')
    update(@Body() data: Iadmin, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }

}
