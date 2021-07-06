import { Video } from './../videos/entity/video';
import { ProjectEntity } from './../project/entity/project.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import * as fs from 'fs'
import { Images } from '../images/entity/images';
import { Admin } from '../admin/entity/admin';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: process.env.fabelodb_username,
            password: process.env.fabelodb_password,
            database: 'fabelodatabase',
            entities: [
                ProjectEntity,
                Images,
                Video,
                Admin
            ],
            synchronize: true
        })
    ]
})
export class DatabaseModule {
    type:string;
    host:string;
    port:number;
    username:string;
    password:string;
    database:string;

    constructor(private readonly connection: Connection) {
        
    }
}
