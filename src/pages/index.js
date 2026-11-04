import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import LatestPosts from '@site/src/components/LatestPosts';
import Products from '@site/src/components/Products';
import site from '@site/src/data/site';
import styles from './index.module.css';

function SocialLinks() {
  return (
    <ul className={styles.socialLinks}>
      {site.socialLinks.map(({label, href}) => (
        <li key={href}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <img
        src={site.author.avatar}
        alt={site.author.name}
        className={styles.heroAvatar}
        width={128}
        height={128}
      />
      <div>
        <Heading as="h1" className={styles.heroTitle}>
          {site.author.name}
        </Heading>
        <p className={styles.heroTagline}>
          <Translate id="home.hero.tagline">Notas de um dev curioso</Translate>
        </p>
        <div className={styles.heroActions}>
          <Link className="button button--primary button--lg" to="/blog">
            <Translate id="home.hero.readBlog">Ler o blog</Translate>
          </Link>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}

const highlights = [
  {
    id: 'home.about.highlight.genai',
    message: 'IA generativa: LLMs, fine-tuning, Amazon Bedrock, LangGraph',
  },
  {
    id: 'home.about.highlight.serverless',
    message:
      'Arquitetura serverless na AWS (Lambda, DynamoDB) em produto financeiro que processou mais de US$ 100 milhões em transações',
  },
  {
    id: 'home.about.highlight.leadership',
    message: 'Liderança técnica e mentoria de times',
  },
  {
    id: 'home.about.highlight.iot',
    message:
      'Pesquisa em IoT aplicada ao ensino de Física na UFU, com experimentos remotos para mais de 20 mil professores e alunos',
  },
];

function About() {
  return (
    <section className={styles.about}>
      <Heading as="h2">
        <Translate id="home.about.title">Sobre mim</Translate>
      </Heading>
      <div className={styles.aboutBody}>
        <img
          src={site.author.avatar}
          alt=""
          className={styles.aboutAvatar}
          width={96}
          height={96}
          loading="lazy"
        />
        <div>
          <p>
            <Translate id="home.about.text">
              Sou desenvolvedor de software e hoje trabalho com IA generativa,
              automação de processos e arquiteturas serverless. Já construí
              chatbots inteligentes e otimizei fluxos complexos com Python,
              LangGraph e AWS. Passei por fintechs de crédito, onde atuei como
              engenheiro, tech lead e staff engineer, e por projetos de
              logística e RH. Gosto de simplificar o que é complexo e de
              compartilhar o que aprendo, e é para isso que existe este blog.
            </Translate>
          </p>
          <ul>
            {highlights.map(({id, message}) => (
              <li key={id}>{translate({id, message})}</li>
            ))}
          </ul>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({id: 'home.meta.title', message: 'Início'})}
      description={translate({
        id: 'home.meta.description',
        message:
          'Blog de Matheus Neto: notas sobre o que estou estudando, em português e inglês.',
      })}>
      <main className="container">
        <Hero />
        <LatestPosts />
        <Products />
        <About />
      </main>
    </Layout>
  );
}
