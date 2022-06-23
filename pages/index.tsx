import { GetStaticProps } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import slugify from 'slugify';

// Data
import graveyard from '../graveyard.json';

// Components
import Header from '../components/Header';
import App from '../components/App';
import Footer from '../components/Footer';
import { ProductWithSlug } from '../types/Product';

const HomePage: React.FC<{ items: ProductWithSlug[] }> = ({ items }) => {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
                <meta name="description" content="Killed by Riot Games is the Riot Games Graveyard. A full list of dead products Killed by Riot Games in the Riot Games Cemetery." />
                <link rel="shortcut icon" href="favicon.png" />
                <title>Riot Games Graveyard - Killed by Riot Games</title>
                <meta name="theme-color" content="#FAFAFA" />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_URL}`} />
                <meta name="image" content={`${process.env.NEXT_PUBLIC_URL}/social/card.png`}></meta>
                <meta itemProp="name" content="Killed by Riot Games" />
                <meta itemProp="description" content="Killed by Riot Games is the Riot Games Graveyard. A full list of dead products Killed by Riot Games in the Riot Games Cemetery." />
                <meta itemProp="image" content={`${process.env.NEXT_PUBLIC_URL}/social/card.png`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Killed by Riot Games" />
                <meta name="twitter:description" content="Killed by Riot Games is the Riot Games Graveyard. A full list of dead products Killed by Riot Games in the Riot Games Cemetery." />
                <meta name="twitter:image:src" content={`${process.env.NEXT_PUBLIC_URL}/social/card-twitter.png`} />
                <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_URL}/social/card-twitter.png`} />
                <meta name="og:title" property="og:title" content="Killed by Riot Games" />
                <meta name="og:url" property="og:url" content={`${process.env.NEXT_PUBLIC_URL}`} />
                <meta name="og:description" property="og:description" content="Killed by Riot Games is the open source list of dead Riot Games products, services, and devices. It serves as a tribute and memorial of beloved services and products Killed by Riot Games." />
                <meta name="image" property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/social/card.png`} />
                <meta name="og:image" property="og:image" content={`${process.env.URL}/social/card.png`} />
                <meta name="og:site_name" property="og:site_name" content="Killed by Riot Games" />
                <meta name="og:type" property="og:type" content="website" />
                <meta name="author" content="Neekhaulas" />
            </Head>
            <Header />
            <App items={items} />
            <Footer />
        </>
    );
}
export default HomePage;

export const getStaticProps: GetStaticProps = async (_context) => {

    slugify.extend({
        '+': '-plus',
        '@': '-at',
    });

    const processed = graveyard.map((item) => ({
        ...item,
        slug: slugify(item.name, {
            lower: true,
        })
    })).sort((a, b) => (new Date(b.dateClose)).getTime() - (new Date(a.dateClose)).getTime());

    return {
        props: {
            items: processed
        }
    }
}
