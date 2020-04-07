const next = require("next");
const polka = require("polka");

class Server {
	constructor() {
		this.port = process.env.PORT = 28785;
		this.environment = process.env.NODE_ENV;
		this.inDevelopment = process.env.NODE_ENV !== "production";
		this.server = polka();
	}

	init() {
		const app = next({ inDevelopment: this.inDevelopment });
		const nextHandler = app.getRequestHandler();

		app.prepare().then(() => {
			this.server.get("/about", (req, res) => app.render(req, res, "/about", req.query));
			this.server.get("/:username", (req, res) => app.render(req, res, "/profile", { username: req.params.username }));
			this.server.get("/", (req, res) => app.render(req, res, "/landing", req.query));
			this.server.get("*", nextHandler);
			this.server.listen(this.port, (error) => {
				if (error) throw error;

				console.log(`Running now in production mode on port ${this.port}!`);
			});
		});
	}
}

module.exports = Server;
