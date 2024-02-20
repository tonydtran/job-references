import styled from 'styled-components'
import references from './references'
import './App.scss'

const ANIMATION_SPEED = '400ms'
const ANIMATION_DELAY = 150
console.log(
  "Hello 👋 ! N'hésitez-pas à consulter mon profil à cette adresse : https://linktr.ee/anthony_tranvan"
)

function App() {
  return (
    <Container>
      <Link href="https://linktr.ee/anthony_tranvan">
        ← Revenir à mon profil
      </Link>
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
          <Item key={reference.id} $delay={`${(i + 1) * ANIMATION_DELAY}ms`}>
            <div className="item-container">
              <div className="item-header">
                <img src={reference.avatar} alt={reference.author} />
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
  padding: 2rem 1rem 4rem;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 3rem 2rem 5rem;
  }
`

const Link = styled.a`
  color: #000;
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
  grid-template-columns: repeat(1, 1fr);
  margin: 0 auto;
  width: 100%;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Item = styled.div`
  display: block;
  position: relative;

  .item-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #000;
    padding: 32px;
    border-radius: 8px;
    box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.5);
    transition: ${ANIMATION_SPEED};
    opacity: 0;
    animation: ${({ $delay }) => `${ANIMATION_SPEED} ease ${$delay} forwards slidein`};

    &:hover {
      box-shadow: 2px 4px 16px 0px rgba(0, 0, 0, 0.5);
    }

    @keyframes slidein {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0%);
        opacity: 1;
      }
    }
  }

  .item-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      border-radius: 50%;
      width: 100px;
      margin-bottom: 1rem;
    }

    h2 {
      margin-bottom: 0.5rem;
    }
  }

  .item-text {
    margin: 3rem 0;
    font-style: italic;
    opacity: 0.8;
    text-align: justify;
    position: relative;

    &:before {
      font-family: 'Lobster', sans-serif;
      content: '“';
      font-style: normal;
      font-weight: 400;
      font-size: 12rem;
      line-height: 0rem;
      position: absolute;
      top: 3rem;
      left: -2rem;
      opacity: 0.1;
      margin: 0;
    }

    &:after {
      font-family: 'Lobster', sans-serif;
      content: '”';
      font-style: normal;
      font-weight: 400;
      font-size: 12rem;
      line-height: 0rem;
      position: absolute;
      bottom: -3rem;
      right: -0.5rem;
      opacity: 0.1;
      margin: 0;
    }

    p {
      display: inline-block;
    }

    & > p + p {
      margin-top: 1rem;
    }
  }

  a {
    font-style: italic;
    font-size: 0.9rem;
    text-align: center;
    color: #000;
    opacity: 0.8;
    margin-top: auto;
  }
`

export default App
