import Link from 'next/link';

import styles from './home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<section className={[styles.hero, styles.tnatu].join(' ')}>
				<div className={styles.sub_container}>
					<div className={styles.title}>
						<h2 className={styles.title_heading}>T[natu]</h2>
						<h3 className={styles.title_sub_heading}>
							O futuro do mundo sustentável está aqui.
						</h3>
						<p className={styles.title_price}></p>
					</div>
					<div className={styles.cta}>
						<Link href='/products/tnatu'>
							<a href='' className={styles.cta_link}>
								Saiba mais
							</a>
						</Link>
						<Link href='/shop/tnatu'>
							<a href='' className={styles.cta_link}>
								Comprar
							</a>
						</Link>
					</div>
				</div>
			</section>
			<section className={[styles.hero, styles.enatu].join(' ')}>
				<div className={styles.sub_container}>
					<div className={[styles.title].join(' ')}>
						<h2 className={styles.title_heading}>E[natu]</h2>
						<h3
							className={[styles.title_sub_heading, styles.title_dark].join(
								' '
							)}
						>
							Sustentabilidade.
						</h3>
						<p className={styles.title_price}>
							Uma solução simples para algo que deveria ser simples.
						</p>
					</div>
					<div className={styles.cta}>
						<Link href='/products/enatu'>
							<a
								href=''
								className={[styles.cta_link, styles.cta_link_darker].join(' ')}
							>
								Saiba mais
							</a>
						</Link>
						<Link href='/shop/enatu'>
							<a
								href=''
								className={[styles.cta_link, styles.cta_link_darker].join(' ')}
							>
								Comprar
							</a>
						</Link>
					</div>
				</div>
			</section>

			<section className={[styles.hero, styles.natureza].join(' ')}>
				<div className={styles.sub_container}>
					<div className={[styles.title].join(' ')}>
						<h2 className={styles.title_heading}>Natureza</h2>
					</div>
				</div>
			</section>
		</div>
	);
}
