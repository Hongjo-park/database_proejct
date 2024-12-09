"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./entities/user.entity");
const auth_module_1 = require("./auth/auth.module");
const racquets_module_1 = require("./racquets/racquets.module");
const racquet_entity_1 = require("./entities/racquet.entity");
const racquets_details_module_1 = require("./racquets_details/racquets_details.module");
const racquet_details_entity_1 = require("./entities/racquet_details.entity");
const review_entity_1 = require("./entities/review.entity");
const review_module_1 = require("./review/review.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    entities: [user_entity_1.User, racquet_entity_1.Racquet, racquet_details_entity_1.RacquetDetail, review_entity_1.Review],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            racquets_module_1.RacquetsModule,
            racquets_details_module_1.RacquetDetailsModule,
            review_module_1.ReviewModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map