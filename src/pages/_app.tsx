import '../../styles/globals.scss';
import { Footer } from '../components/Footer';

import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<main>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</main>
		</div>
	);
}

export default MyApp;
