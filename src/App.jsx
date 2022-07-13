
import './App.css'
import Cabecalho from './Components/Cabecalho'
import Imagem from './Components/Imagem'
import Resumo from './Components/Resumo'
import Titulo from './Components/Titulo'
import Cards from './Components/Cards'
import Footer from './Components/Footer'


function App() {
  return(
    <div class="App">
      <header>
        <Cabecalho>Meu Portfólio da Reprograma</Cabecalho>
      </header>

      <nav className='navbar'>
        <Imagem Image="https://pbs.twimg.com/profile_images/1532507998257651714/OFhFRScs_400x400.jpg" alt="Imagem da desenvolvedora Benja Ferreira"/>
        <Titulo title="Prazer, Benja Ferreira"/>

        <div class="section">
          <Resumo> Graduanda em Ciências Biológicas e aluna da Reprograma.
          Tenho confabulado possibilidades de integrar Tec e Bio na área da conservação.
          Ainda não tenho respostas. Essas são cenas da próxima temporada. Fica Ligada!
          </Resumo>
        </div>
      </nav>
      <hr/>
      <article>
        <Titulo title = "{Projetos}"/>
        <div className='cards'>
           <Cards>
            <Titulo title="M de Maravilhosa"></Titulo>
            <Imagem Image="./src/img/M-de-Maravilhosa.jpg" alt="imagem do M de Maravilhosa"/>
            <Resumo> 
              Projeto realizado para demonstrar nossas habilidade em CSS e HTML.
              E, além disso, poder conhecer e compartilhar informações de mulheres
              que nos inspiram. 
            </Resumo>
           </Cards>
          


        </div>
          

             
          

      </article>
      <footer>
        <Footer>Feito por Benja Ferreira | Turma On17| 2022</Footer>
      </footer>
    </div>

    
    
  )
}

export default App
