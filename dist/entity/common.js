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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = void 0;
var typeorm_1 = require("typeorm");
// tslint:disable:variable-name
var Common = /** @class */ (function () {
    function Common() {
    }
    Common.prototype.addLastModified = function () {
        this.modified_at = new Date();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            name: "id",
            type: "int",
        }),
        __metadata("design:type", Number)
    ], Common.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("timestamp", {
            default: function () { return "CURRENT_TIMESTAMP"; },
            name: "created_at",
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Common.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.Column)("timestamp", {
            default: function () { return "CURRENT_TIMESTAMP"; },
            name: "modified_at",
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Common.prototype, "modified_at", void 0);
    __decorate([
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Common.prototype, "addLastModified", null);
    return Common;
}());
exports.Common = Common;
//# sourceMappingURL=common.js.map