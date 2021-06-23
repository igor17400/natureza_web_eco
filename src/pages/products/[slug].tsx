import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { api } from '../../services/api';
import { fromImageToUrl } from '../../utils/urls';
import { twoDecimals } from '../../utils/format';

import styles from './product.module.scss';

type Image = {
	id: number;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
};

type Product = {
	id: string;
	name: string;
	content: string;
	slug: string;
	price: number;
	meta_title: string;
	meta_description: string;
	image: Image;
};

type ProductProps = {
	product: Product;
};

export default function Product({ product }: ProductProps) {
	return (
		<>
			<Head>
				{product.meta_title && <title>{product.meta_title}</title>}
				{product.meta_description && (
					<meta name='description' content={product.meta_description} />
				)}
			</Head>
			<div className={styles.container}>
				<div className={styles.colContainer}>
					<div className={styles.columnProduct}>
						<Image
							width={480}
							height={480}
							src={fromImageToUrl(product.image)}
							alt='T-natu'
							objectFit='cover'
						/>
					</div>
					<div className={styles.columnProduct}>
						<div className={styles.containerProduct}>
							<h1 className={styles.product_title}>{product.name}</h1>
							<p className={styles.product_price}>
								Por: <b>R$ {twoDecimals(product.price)}</b>
							</p>
							<a className={styles.shop_button}>Adicionar ao carrinho</a>
						</div>
					</div>
				</div>

				<section className={[styles.hero].join(' ')}>
					<div className={[styles.product].join(' ')}>
						<h2 className={styles.title_heading}>Simplicidade.</h2>

						<Image
							width={256}
							height={256}
							src='https://firebasestorage.googleapis.com/v0/b/natureza-3fb3b.appspot.com/o/circuit.jpg?alt=media&token=7f676cdf-bd40-40f4-a53b-fcc2c346add3'
							alt='T-natu'
							objectFit='cover'
						/>

						<p className={styles.title_sub_heading}>
							<em>Smart Vase.</em>
							<br></br>Quem disse que ser mãe de planta é difícil?
						</p>
					</div>
				</section>

				<section className={[styles.hero].join(' ')}>
					<div className={[styles.product].join(' ')}>
						<h2 className={styles.title_heading}>Modernidade.</h2>

						<Image
							width={256}
							height={256}
							src='https://firebasestorage.googleapis.com/v0/b/natureza-3fb3b.appspot.com/o/circuit.jpg?alt=media&token=7f676cdf-bd40-40f4-a53b-fcc2c346add3'
							alt='T-natu'
							objectFit='cover'
						/>

						<p className={styles.title_sub_heading}>
							Através de uma tecnologia de ponta conseguimos <br></br> criar uma
							linha de vasos <em>inteligentes</em>.
						</p>
					</div>
				</section>

				<section className={[styles.hero, styles.hero_white].join(' ')}>
					<div className={[styles.product].join(' ')}>
						<h2 className={[styles.title_heading].join('')}>{product.name}</h2>

						<div className={styles.iframe_styles}>
							<iframe
								src='https://www.youtube.com/embed/E7wJTI-1dvQ'
								allow='autoplay; encrypted-media; fullscreen'
								title='video'
								className={styles.responsive_iframe}
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	// Retrieve two possible paths
	const { data } = await api.get('products', {
		params: {
			_limit: 2,
			_sort: 'published_at',
		},
	});

	const paths = data.map((product) => {
		return {
			params: {
				slug: product.slug,
			},
		};
	});

	// Return such paths to NextJS context
	return {
		paths,
		fallback: 'blocking', // Best option for SEO
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	// Fetch the products
	const { slug } = ctx.params;

	let { data } = await api.get(`/products/?slug=${slug}`);
	data = data[0];

	const product = {
		id: data.id,
		name: data.name,
		price: data.price,
		meta_title: data.meta_titlte,
		meta_description: data.meta_description,
		image: data.image,
	};

	// Return the products as props
	return {
		props: { product },
		revalidate: 60 * 60 * 24,
	};
};
