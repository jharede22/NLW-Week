import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustrationHome from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'
import leaveIcon from '../assets/images/leaveIcon.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss'


export function Home() {
    const history = useHistory();

    function handleCreateRoom() {
        history.push('/rooms/new')

        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result);
        });

        history.push('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationHome} alt="Ilutração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo </strong>
                <p>Tire as dúvidasda sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk Logo" />
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIcon} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Digite o código da sala"/>
                        <Button type="submit" >
                            <img src={leaveIcon} alt="Icone Sair" />
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}