"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.EventEntity = void 0;
var typeorm_1 = require("typeorm");
var common_1 = require("../../entity/common");
var event_book_entity_1 = require("./event.book.entity");
// tslint:disable:variable-name
var EventEntity = /** @class */ (function (_super) {
    __extends(EventEntity, _super);
    function EventEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            name: "id",
            type: "int",
        }),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: 256,
            name: "title",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], EventEntity.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            name: "place",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], EventEntity.prototype, "place", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", {
            name: "nr_people",
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "nr_people", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return event_book_entity_1.EventBookEntity; }, function (eventBookEntity) { return eventBookEntity.event_id; }),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "event_books", void 0);
    EventEntity = __decorate([
        (0, typeorm_1.Entity)("event")
    ], EventEntity);
    return EventEntity;
}(common_1.Common));
exports.EventEntity = EventEntity;
//# sourceMappingURL=event.entity.js.map