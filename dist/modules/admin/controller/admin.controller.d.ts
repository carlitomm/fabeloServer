import { AdminService } from './../service/admin.service';
import { Iadmin } from 'src/modules/model/admin.interface';
export declare class AdminController {
    private service;
    constructor(service: AdminService);
    add(data: Iadmin): any;
    login(data: any): any;
    get(): any;
    getOne(params: any): any;
    update(data: Iadmin, params: any): any;
    delete(params: any): any;
}
