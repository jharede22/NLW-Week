import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useParams } from 'react-router-dom'
import  '../styles/room.scss'
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import { useEffect } from 'react';
import { Question } from '../components/Question';
import '../styles/question.scss';
import { useRoom } from '../hooks/useRoom';

type RoomParams = {
    id: string;
}





export function AdminRoom() {
    const { user } = useAuth()
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const [newQuestion, setNewQuestion] = useState('');
    const {title, questions} = useRoom(roomId)
    

    async function handleSendQuestion(event: FormEvent) {;
        event.preventDefault();

        if (newQuestion.trim() == ''){
            return
        }

        if (!user) {
            throw new Error('Você deveria estar logado')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user?.avatar,
            },
            isHighlighted: false,
            isAnswer: false
        }

        await database.ref(`rooms/${roomId}/questions`).push(question);

        setNewQuestion('');
    }
    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="logo letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined>Encerrar sala</Button>
                    </div>
                </div>
            </header>

        <main>
            <div className="room-title">
                <h1>Sala {title}</h1>
                { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
            </div>
                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question 
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            />
                        )
                    })}
                </div>
            </main>
        </div>
    );
}