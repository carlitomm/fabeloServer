import { Admin } from './../entity/admin';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { bcrypt } from 'bcrypt'

@Injectable()
export class AdminService {

    constructor(@InjectRepository(Admin) private readonly element: Repository<Admin>) { }

    async save(data: any) {
        await this.element.insert(data);
        return data;
    }

    async update(id: number, data: any) {
        await this.element.update(id, data);
    }

    async finAll() {
        return await this.element.find();
    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }

    async login(username: string, pass: string) {
        const user = await this.element.findOne({ where: { username: username } });
        if (!user)
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);

        const areEqual = await this.comparePasswords(user.password, pass);

        if (!areEqual) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        return user;

    }

    async comparePasswords(dbpassword: string, password: string) {
        //console.log(dbpassword + '-' + password)
        //const equals = await bcrypt.compare(password, dbpassword)
        return dbpassword === password;
    }

}
