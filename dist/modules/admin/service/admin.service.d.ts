import { Admin } from './../entity/admin';
import { Repository } from 'typeorm';
export declare class AdminService {
    private readonly element;
    constructor(element: Repository<Admin>);
    save(data: any): Promise<any>;
    update(id: number, data: any): Promise<void>;
    finAll(): Promise<Admin[]>;
    findOne(id: number): Promise<Admin>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    login(username: string, pass: string): Promise<Admin>;
    comparePasswords(dbpassword: string, password: string): Promise<boolean>;
}
