import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import {usePluginData} from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function LatestPosts() {
  const {posts} = usePluginData('latest-posts');
  const {i18n} = useDocusaurusContext();
  const dateFormat = new Intl.DateTimeFormat(i18n.currentLocale, {
    dateStyle: 'long',
    timeZone: 'UTC',
  });

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Heading as="h2" className="margin-bottom--none">
          <Translate id="home.latestPosts.title">Últimos artigos</Translate>
        </Heading>
        <Link to="/blog">
          <Translate id="home.latestPosts.viewAll">Ver todos</Translate> →
        </Link>
      </div>

      {posts.length === 0 ? (
        <p>
          <Translate id="home.latestPosts.empty">
            Nenhum artigo publicado ainda.
          </Translate>
        </p>
      ) : (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.permalink} className={styles.item}>
              <Link to={post.permalink} className={styles.card}>
                <time dateTime={post.date} className={styles.date}>
                  {dateFormat.format(new Date(post.date))}
                </time>
                <Heading as="h3" className={styles.title}>
                  {post.title}
                </Heading>
                {post.description && (
                  <p className={styles.description}>{post.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
