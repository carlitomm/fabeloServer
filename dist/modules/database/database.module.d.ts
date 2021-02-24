import { Connection } from 'typeorm';
export declare class DatabaseModule {
    private readonly connection;
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    constructor(connection: Connection);
}
