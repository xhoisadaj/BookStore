import * as express from 'express';


export class AuthorViewRouter {
    public static configRoutes = (app: express.Application): void => {

        app.get('/home', (req, res) => {
            res.render('home', {
                title: 'Book Store',
                name: 'Xhoani',
                surname: 'Sadaj',
            });
        });

        app.get('/authorevent', (req, res) => {
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

        app.get('/authorbooks', (req, res) => {
            res.render('authorbooks', {
                title: 'Author Books',
                name: 'Xhoani',
                surname: 'Sadaj'
            });
        });
        app.get('*' , (req, res) => {
            res.send('Not found');
        });

    }
}
