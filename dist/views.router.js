"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorViewRouter = void 0;
var AuthorViewRouter = /** @class */ (function () {
    function AuthorViewRouter() {
    }
    AuthorViewRouter.configRoutes = function (app) {
        app.get('/home', function (req, res) {
            res.render('home', {
                title: 'Book Store',
                name: 'Xhoani',
                surname: 'Sadaj',
            });
        });
        app.get('/authorevent', function (req, res) {
            res.render('authorevent', {
                title: 'Author Events',
                name: 'Xhoani',
                surname: 'Sadaj'
            });
        });
        // app.get('/about/*' , (req, res) => {
        //     res.render('about', {
        //         name: 'Xhoani',
        //         surname: 'Sadaj'
        //     });
        // });
        app.get('/authorbooks', function (req, res) {
            res.render('authorbooks', {
                title: 'Author Books',
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