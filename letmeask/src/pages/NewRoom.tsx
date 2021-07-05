import illustrationHome from '../assets/images/illustration.svg'
import { Button } from '../components/Button';
import logoImg from '../assets/images/logo.svg'
import { AuthContext } from '../contexts/AuthContexts'
import { useContext, FormEvent, useState } from 'react'    


import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import { useHistory } from 'react-router-dom';

export function NewRoom() {
    const { user } = useAuth()
    const history = useHistory();
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
        if (newRoom.trim() == '') {
            return;
        }
        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
        title: newRoom,
        authorId: user?.id,
     })
     
     history.push(`/rooms/${firebaseRoom.key}`)
    }

    return(
     <div id="page-auth">
        <aside>
            <img src={illustrationHome} alt="Ilutração simbolizando perguntas e respostas" />
            <strong>Crie salas de Q&amp;A ao-vivo </strong>
            <p>Tire as dúvidas da sua audiência em tempo-real</p>
        </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk Logo" />
                    <h1>{user?.name}</h1>
                    <h2>Crie uma nova sala</h2>
                        <form onSubmit={handleCreateRoom}>
                            <input 
                            type="text" 
                            placeholder="Nome da Sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                            />
                            <Button type="submit">Criar Sala</Button>
                        </form>
                    <p>Quer entrar em uma sala já existente?<a href="#"> Clique aqui</a></p>
                </div>
            </main>
        </div>
    )
}
