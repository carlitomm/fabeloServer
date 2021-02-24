"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = require("./../entity/admin");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AdminService = class AdminService {
    constructor(element) {
        this.element = element;
    }
    async save(data) {
        await this.element.insert(data);
        return data;
    }
    async update(id, data) {
        await this.element.update(id, data);
    }
    async finAll() {
        return await this.element.find();
    }
    async findOne(id) {
        return await this.element.findOne(id);
    }
    async delete(id) {
        return await this.element.delete(id);
    }
    async login(username, pass) {
        const user = await this.element.findOne({ where: { username: username } });
        if (!user)
            throw new common_1.HttpException('User not found', common_1.HttpStatus.UNAUTHORIZED);
        const areEqual = await this.comparePasswords(user.password, pass);
        if (!areEqual) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
    async comparePasswords(dbpassword, password) {
        return dbpassword === password;
    }
};
AdminService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(admin_1.Admin)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map