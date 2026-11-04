import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import {usePluginData} from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function readingTimeLabel(minutes) {
  return translate(
    {id: 'home.latestPosts.readingTime', message: '{minutes} min de leitura'},
    {minutes: Math.max(1, Math.ceil(minutes))},
  );
}

export default function LatestPosts() {
  const {posts} = usePluginData('latest-posts');
  const {i18n} = useDocusaurusContext();
  const dateFormat = new Intl.DateTimeFormat(i18n.currentLocale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Heading as="h2" className={styles.heading}>
          <Translate id="home.latestPosts.title">Últimos artigos</Translate>
        </Heading>
        <Link to="/blog" className={styles.viewAll}>
          <Translate id="home.latestPosts.viewAll">ver todos</Translate> →
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
            <li key={post.permalink} className={styles.card}>
              {post.tags.length > 0 && (
                <ul className={styles.tags}>
                  {post.tags.map((tag) => (
                    <li key={tag.permalink}>
                      <Link to={tag.permalink} className={styles.tag}>
                        #{tag.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <Heading as="h3" className={styles.title}>
                <Link to={post.permalink} className={styles.titleLink}>
                  {post.title}
                </Link>
              </Heading>
              {post.description && (
                <p className={styles.description}>{post.description}</p>
              )}
              <p className={styles.meta}>
                <time dateTime={post.date}>
                  {dateFormat.format(new Date(post.date))}
                </time>
                {post.readingTime !== undefined &&
                  ` · ${readingTimeLabel(post.readingTime)}`}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
