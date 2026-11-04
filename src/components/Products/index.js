import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import site from '@site/src/data/site';
import products from '@site/src/data/products';
import styles from './styles.module.css';

// Rendered only when `showProducts` is true in src/data/site.js
export default function Products() {
  if (!site.showProducts) {
    return null;
  }

  return (
    <section className={styles.section}>
      <Heading as="h2">
        <Translate id="home.products.title">Produtos</Translate>
      </Heading>
      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.name}>
            <Link to={product.href} className={styles.card}>
              <div className={styles.cardHeader}>
                <Heading as="h3" className="margin-bottom--none">
                  {product.name}
                </Heading>
                {product.status && (
                  <span className="badge badge--secondary">
                    {product.status}
                  </span>
                )}
              </div>
              <p className="margin-bottom--none">{product.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
