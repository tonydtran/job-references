import styled from 'styled-components'
import references from './references'
import './App.scss'

const ANIMATION_SPEED = '400ms'
const ANIMATION_DELAY = 150
const BLACK = '#000'
const WHITE = '#fff'
const BOX_SHADOW_COLOR = 'rgba(0, 0, 0, 0.5)'
const PROFILE_LINK = 'https://linktr.ee/anthony_tranvan'

console.log(
  `Hello 👋 ! N'hésitez-pas à consulter mon profil à cette adresse : ${PROFILE_LINK}`
)

function App() {
  return (
    <Container>
      <Link href={PROFILE_LINK}>← Revenir à mon profil</Link>
      <Hgroup>
        <h1>🖋️ Recommandations</h1>
        <p>
          Cette page regroupe des recommandations reçues via diverses
          plateformes (LinkedIn, Malt, etc) que j'ai reçues de mes anciens
          collègues, clients et partenaires avec qui j'ai eu la chance de
          travailler. En grand merci à eux pour leur confiance et leur
          témoignage.
        </p>
      </Hgroup>
      <Grid>
        {references.map((reference, i) => (
          <Item key={reference.author} $delay={`${(i + 1) * ANIMATION_DELAY}ms`}>
            <div className="item-container">
              <div className="item-header">
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
                className="item-text"
                dangerouslySetInnerHTML={{
                  __html: reference.text,
                }}
                cite={reference.link}
              />
              <a href={reference.link} target="_blank">
                Source : {reference.source}
              </a>
            </div>
          </Item>
        ))}
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem 1rem 4rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem 5rem;
  }
`

const Link = styled.a`
  color: ${BLACK};
  margin-bottom: 2rem;
`

const Hgroup = styled.hgroup`
  margin-bottom: 2rem;

  p {
    font-weight: 600;
  }

  & > * + * {
    margin-top: 1rem;
  }
`

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Item = styled.div`
  display: block;
  position: relative;

  .item-container {
    animation: ${({ $delay }) =>
      `${ANIMATION_SPEED} ease ${$delay} forwards slidein`};
    background-color: ${WHITE};
    border-radius: 8px;
    box-shadow: 2px 4px 8px 0px ${BOX_SHADOW_COLOR};
    color: ${BLACK};
    display: flex;
    flex-direction: column;
    height: 100%;
    opacity: 0;
    padding: 32px;
    position: relative;
    transition: ${ANIMATION_SPEED};
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

  .item-header {
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

  .item-text {
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
    color: ${BLACK};
    font-size: 0.9rem;
    font-style: italic;
    margin-top: auto;
    opacity: 0.8;
    text-align: center;
  }
`

export default App
