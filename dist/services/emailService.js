"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emailService = /** @class */ (function () {
    function emailService() {
    }
    emailService.prototype.sendMail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("E-mail enviado para " + to.name + ": " + message.subject);
    };
    return emailService;
}());
exports.default = emailService;
