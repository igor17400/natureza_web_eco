import styles from './styles.module.scss';
import { useState } from 'react';

export function Header() {
	const [toggle, setToggle] = useState(false);

	function toggleSetState() {
		if (toggle) setToggle(false);
		else setToggle(true);
	}

	return (
		<header className={[styles.header, toggle ? styles.active : ''].join(' ')}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<ul className={[styles.nav_list, styles.nav_list_mobile].join(' ')}>
						<li className={styles.nav_item}>
							<div
								className={styles.mobile_menu}
								onClick={() => toggleSetState()}
							>
								<span
									className={[
										styles.line,
										styles.line_top,
										toggle ? styles.active : '',
									].join(' ')}
								></span>
								<span
									className={[
										styles.line,
										styles.line_bottom,
										toggle ? styles.active : '',
									].join(' ')}
								></span>
							</div>
						</li>
						<li className={styles.nav_item}>
							<a
								href='/'
								className={[styles.nav_link, styles.nav_link_natureza].join(
									' '
								)}
							></a>
						</li>
						<li className={styles.nav_item}>
							<a
								href='#'
								className={[
									styles.nav_link,
									styles.nav_link_bag,
									toggle ? styles.active : '',
								].join(' ')}
							></a>
						</li>
					</ul>

					<ul
						className={[
							styles.nav_list,
							styles.nav_list_larger,
							toggle ? styles.active : '',
						].join(' ')}
					>
						<li className={[styles.nav_item, styles.nav_item_hidden].join(' ')}>
							<a
								href='/'
								className={[styles.nav_link, styles.nav_link_natureza].join(
									' '
								)}
							></a>
						</li>

						<li className={styles.nav_item}>
							<a href='#' className={styles.nav_link}>
								E[natu]
							</a>
						</li>
						<li className={styles.nav_item}>
							<a href='#' className={styles.nav_link}>
								T[natu]
							</a>
						</li>

						<li className={[styles.nav_item, styles.nav_item_hidden].join(' ')}>
							<a
								href='#'
								className={[styles.nav_link, styles.nav_link_bag].join(' ')}
							></a>
						</li>
					</ul>
				</nav>
			</div>
			<hr />
		</header>
	);
}
