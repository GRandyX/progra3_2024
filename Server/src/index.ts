import APP from './app';
import config from './config';

function main() {
	APP.listen(config.server.port, config.server.host, () => {
		console.log('Escuchando en %s y el puerto %d', config.server.host, config.server.port);
	});
}

main();
