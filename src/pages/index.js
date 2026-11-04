import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LatestPosts from '@site/src/components/LatestPosts';
import Products from '@site/src/components/Products';
import site from '@site/src/data/site';
import styles from './index.module.css';

function SocialLinks({className}) {
  return (
    <>
      {site.socialLinks.map(({label, href}) => (
        <Link key={href} href={href} className={className}>
          {label}
        </Link>
      ))}
    </>
  );
}

// Post-it com o tema do momento; sem tema definido, mostra a foto
function HeroAside() {
  const {i18n} = useDocusaurusContext();
  const studying = site.studyingNow[i18n.currentLocale];

  if (studying) {
    return (
      <div className={styles.postit}>
        <p className={styles.postitTitle}>
          <Translate id="home.hero.studyingNow">estudando agora:</Translate>
        </p>
        <p className={styles.postitText}>{studying}</p>
      </div>
    );
  }

  return (
    <figure className={styles.polaroid}>
      <img
        src={site.author.avatar}
        alt={site.author.name}
        width={220}
        height={220}
      />
      <figcaption>
        <Translate id="home.hero.photoCaption">eu, estudando</Translate>
      </figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroMain}>
        <p className={styles.greeting}>
          <Translate id="home.hero.greeting">oi, eu sou o Matheus →</Translate>
        </p>
        <Heading as="h1" className={styles.heroTitle}>
          <Translate
            id="home.hero.title"
            values={{
              highlight: (
                <mark>
                  <Translate id="home.hero.titleHighlight">aberto</Translate>
                </mark>
              ),
            }}>
            {'Meu caderno de estudos, {highlight} pra quem quiser ler.'}
          </Translate>
        </Heading>
        <p className={styles.heroText}>
          <Translate id="home.hero.text">
            Notas de um dev curioso sobre IA generativa, arquitetura serverless
            e o que mais aparecer pelo caminho. Em português e em inglês.
          </Translate>
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.buttonPrimary} to="/blog">
            <Translate id="home.hero.readBlog">Ler o blog</Translate>
          </Link>
          <SocialLinks className={styles.buttonSecondary} />
        </div>
      </div>
      <div className={styles.heroAside}>
        <HeroAside />
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
      <img
        src={site.author.avatar}
        alt=""
        className={styles.aboutAvatar}
        width={112}
        height={112}
        loading="lazy"
      />
      <div className={styles.aboutBody}>
        <Heading as="h2" className={styles.aboutTitle}>
          <Translate id="home.about.title">Sobre mim</Translate>
        </Heading>
        <p className={styles.aboutText}>
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
        <ul className={styles.highlights}>
          {highlights.map(({id, message}) => (
            <li key={id}>{translate({id, message})}</li>
          ))}
        </ul>
        <div className={styles.aboutLinks}>
          <SocialLinks className={styles.aboutLink} />
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
