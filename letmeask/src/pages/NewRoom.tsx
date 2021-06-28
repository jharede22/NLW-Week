import illustrationHome from '../assets/images/illustration.svg'
import { Button } from '../components/Button';
import logoImg from '../assets/images/logo.svg'

import '../styles/auth.scss'

export function NewRoom() {
    return(
     <div id="page-auth">
        <aside>
            <img src={illustrationHome} alt="Ilutração simbolizando perguntas e respostas" />
            <strong>Crie salas de Q&amp;A ao-vivo </strong>
            <p>Tire as dúvidasda sua audiência em tempo-real</p>
        </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk Logo" />
                    <h2>Crie uma nova sala</h2>
                        <form>
                            <input type="text" placeholder="Nome da Sala"/>
                            <Button type="submit">Criar Sala</Button>
                        </form>
                    <p>Quer entrar em uma sala já existente?<a href="#"> Clique aqui</a></p>
                </div>
            </main>
        </div>
    )
}