import * as express from 'express';


export class AuthorViewRouter {
    public static configRoutes = (app: express.Application): void => {

        app.get('/', (req, res) => {
            res.render('home', {
                title: 'Book Store',
                name: 'Xhoani',
                surname: 'Sadaj',
            });
        });

        app.get('/about', (req, res) => {
            res.render('about', {
                title: 'About Page',
                name: 'Xhoani',
                surname: 'Sadaj'
            });
        });

        app.get('/about/*' , (req, res) => {
            res.render('about', {
                name: 'Xhoani',
                surname: 'Sadaj'
            });
        });

        app.get('/help', (req, res) => {
            res.render('help', {
                name: 'Xhoani',
                surname: 'Sadaj'
            });
        });
        app.get('*' , (req, res) => {
            res.send('Not found');
        });

    }
}
