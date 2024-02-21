import styled from 'styled-components'
import references from './references'
import './App.scss'

const ANIMATION_SPEED = 500
const ANIMATION_DELAY = 200
const HGROUP_TEXT_COLOR = '#fff'
const TEXT_COLOR = '#000'
const CARD_BACKGROUND_COLOR = '#fff'
const BOX_SHADOW_COLOR = 'rgba(0, 0, 0, 0.5)'
const PROFILE_LINK = 'https://linktr.ee/anthony_tranvan'

console.info(
  `
    Hello 👋 ! N'hésitez-pas à consulter mon profil à cette adresse : ${PROFILE_LINK}
    Vous pouvez également retrouver le repo de ce projet ici : https://github.com/tonydtran/job-references
  `
)

function App() {
  return (
    <Container>
      <Link href={PROFILE_LINK}>← Revenir à mon profil</Link>
      <Hgroup>
        <h1>🖋️ Recommandations</h1>
        <p>
          Cette page regroupe des recommandations sur diverses
          plateformes (LinkedIn, Malt, etc) que j'ai reçues de mes anciens
          collègues, clients et partenaires avec qui j'ai eu la chance de
          travailler. Encore un grand merci à eux pour leur confiance et leur
          témoignage.
        </p>
      </Hgroup>
      <Grid>
        {references.map((reference, i) => (
          <Card key={reference.author} $delay={`${(i + 1) * ANIMATION_DELAY}ms`}>
            <div className="card-container">
              <div className="card-header">
                <img
                  src={reference.avatar}
                  alt={reference.author}
                  width={100}
                  height={100}
                />
                <h2>{reference.author}</h2>
                <h3>{reference.jobTitle}</h3>
              </div>
              <q
                className="card-text"
                dangerouslySetInnerHTML={{
                  __html: reference.text,
                }}
                cite={reference.link}
              />
              <a href={reference.link} target="_blank">
                Source : {reference.source}
              </a>
            </div>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem 1rem 4rem;

  & > * + * {
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    padding: 3rem 2rem 5rem;
  }
`

const Link = styled.a`
  color: ${TEXT_COLOR};
  width: fit-content;
`

const Hgroup = styled.hgroup`
  color: ${HGROUP_TEXT_COLOR};

  p {
    font-size: 1.0rem;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  & > * + * {
    margin-top: 1rem;
  }
`

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;

  @media (min-width: 768px) {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.article`
  display: block;
  position: relative;

  .card-container {
    animation: ${({ $delay }) =>
      `${ANIMATION_SPEED}ms ease ${$delay} forwards slidein`};
    background-color: ${CARD_BACKGROUND_COLOR};
    border-radius: 8px;
    box-shadow: 2px 4px 8px 0px ${BOX_SHADOW_COLOR};
    color: ${TEXT_COLOR};
    display: flex;
    flex-direction: column;
    height: 100%;
    opacity: 0;
    padding: 32px;
    position: relative;
    transition: ${ANIMATION_SPEED}ms;
    width: 100%;

    &:hover {
      box-shadow: 2px 4px 16px 0px ${BOX_SHADOW_COLOR};
    }

    @keyframes slidein {
      0% {
        opacity: 0;
        transform: translateX(-100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }

  .card-header {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
      border-radius: 50%;
      margin-bottom: 1rem;
    }

    h2 {
      margin-bottom: 0.5rem;
    }
  }

  .card-text {
    font-style: italic;
    margin: 3rem 0;
    opacity: 0.8;
    position: relative;
    text-align: justify;

    &:before,
    &:after {
      font-family: 'Lobster', sans-serif;
      font-size: 12rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0rem;
      margin: 0;
      opacity: 0.1;
      position: absolute;
    }

    &:before {
      content: '“';
      left: -2rem;
      top: 3rem;
    }

    &:after {
      bottom: -3rem;
      content: '”';
      right: -0.5rem;
    }

    p {
      display: inline-block;
    }

    & > p + p {
      margin-top: 1rem;
    }
  }

  a {
    align-self: center;
    color: ${TEXT_COLOR};
    font-size: 0.9rem;
    font-style: italic;
    margin-top: auto;
    opacity: 0.8;
    text-align: center;
    width: fit-content;
  }
`

export default App
