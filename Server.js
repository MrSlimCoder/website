const next = require('next');
const polka = require('polka');

class Server {
    constructor() {
        this.port = process.env.PORT = 28785;
        this.environment = process.env.NODE_ENV;
        this.inDevelopment = process.env.NODE_ENV !== 'production';
        this.server = polka();

        this._run();
    }

    _run() {
        const app = next({ inDevelopment: this.inDevelopment });
        const nextHandler = app.getRequestHandler();

        app.prepare().then(() => {
            this.server.get('*', nextHandler);
            this.server.listen(this.port, (error) => {
                if (error) throw error;

                console.log(`Running now in production mode on port ${this.port}!`);
            });
        });
    }
}

module.exports = new Server();