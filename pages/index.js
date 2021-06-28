import axios from 'axios';
import Weather from '../components/Weather';
import SEO from '../components/SEO';

export async function getServerSideProps(context) {
	const res = await axios.get(`https://ipwhois.app/json/`);
	const data = res.data;

	if (!data) {
		return {
			notFound: true
		};
	}

	return {
		props: { data } // will be passed to the page component as props
	};
}

export default function Home({ data }) {
	return (
		<>
			<SEO />
			<Weather geoData={data} />
		</>
	);
}
