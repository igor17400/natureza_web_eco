import styles from './styles.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div className={[styles.left, styles.box].join(' ')}>
					<div className={styles.upper}>
						<div className={styles.topic}>Sobre nós</div>
						<p className={styles.text_descr}>
							Somos uma empresa de tecnologia que visa modificar por completo o
							ambiente de nossas casas.
						</p>
					</div>
					<div className={styles.lower}>
						<div className={styles.topic}>Contate-nos</div>
						<div className={styles.phone}>
							<a href='#'>+55 (61) 99699-5651</a>
						</div>
						<div className={styles.email}>
							<a href='#'>igorlima1740@gmail.com</a>
						</div>
					</div>
				</div>
				<div className={[styles.middle, styles.box].join(' ')}>
					<div className={styles.topic}>Linhas Nature </div>
					<div>
						<Link href='/products/enatu'>
							<a>E-Natu</a>
						</Link>
					</div>
					<div>
						<Link href='/products/tnatu'>
							<a>T-Natu</a>
						</Link>
					</div>
				</div>
				<div className={[styles.right, styles.box].join(' ')}>
					<div className={styles.topic}>Inscreva-se em nossa Newsletter</div>
					<form action='#'>
						<input type='text' placeholder='E-mail' />
						<input type='submit' name='' value='Send' />
						<div className={styles.media_icons}>
							<a href='https://www.instagram.com/igorlima174/' target='_blank'>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a
								href='https://www.youtube.com/watch?v=eIqnNXAy3Hg'
								target='_blank'
							>
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</div>
					</form>
				</div>
			</div>
			<div className={styles.bottom}>
				<p>
					Copyright © 2020 <a href='#'>Nature</a> Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
}
