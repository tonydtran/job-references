import styled from 'styled-components'
import references from './references'
import './App.css'

function App() {
  return (
    <Container>
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
        {references.map(reference => (
          <Item key={reference.id}>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 2px 4px 16px 0px rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
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
      font-family: 'Annapurna SIL';
      font-style: normal;
      content: open-quote;
      font-size: 12rem;
      line-height: 0rem;
      position: absolute;
      top: 4.5rem;
      left: -1.5rem;
      opacity: 0.1;
      margin: 0;
    }

    &:after {
      font-family: 'Annapurna SIL';
      font-style: normal;
      content: close-quote;
      font-size: 12rem;
      line-height: 0rem;
      position: absolute;
      bottom: -4.5rem;
      right: -1.5rem;
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
