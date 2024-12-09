"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RacquetsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const racquet_entity_1 = require("../entities/racquet.entity");
const racquets_service_1 = require("./racquets.service");
const racquets_controller_1 = require("./racquets.controller");
let RacquetsModule = class RacquetsModule {
};
exports.RacquetsModule = RacquetsModule;
exports.RacquetsModule = RacquetsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([racquet_entity_1.Racquet])],
        controllers: [racquets_controller_1.RacquetsController],
        providers: [racquets_service_1.RacquetsService],
    })
], RacquetsModule);
//# sourceMappingURL=racquets.module.js.map