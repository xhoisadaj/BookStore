"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorViewRouter = void 0;
var AuthorViewRouter = /** @class */ (function () {
    function AuthorViewRouter() {
    }
    AuthorViewRouter.configRoutes = function (app) {
        app.get('/', function (req, res) {
            res.render('home', {
                title: 'Book Store',
                name: 'Xhoani',
                surname: 'Sadaj',
            });
        });
        app.get('/about', function (req, res) {
            res.render('about', {
                title: 'About Page',
                name: 'Xhoani',
                surname: 'Sadaj'
            });
        });
        app.get('/about/*', function (req, res) {
            res.render('about', {
                name: 'Xhoani',
                surname: 'Sadaj'
            });
        });
        app.get('/help', function (req, res) {
            res.render('help', {
                name: 'Xhoani',
                surname: 'Sadaj'
            });
        });
        app.get('*', function (req, res) {
            res.send('Not found');
        });
    };
    return AuthorViewRouter;
}());
exports.AuthorViewRouter = AuthorViewRouter;
//# sourceMappingURL=views.router.js.map