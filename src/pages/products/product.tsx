import { useEffect, useRef, useState } from 'react';

import products from '../../../products.json';

import styles from './product.module.scss';

export default function Product() {
	return (
		<div className={styles.container}>
			<h1>Produtos</h1>
			{products.map((product) => (
				<div key={product.name}>{product.name} {product.price}</div>
			))}
		</div>
	);
}
