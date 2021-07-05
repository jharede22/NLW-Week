import copyImg from '../assets/images/copy.svg'
import { useParams } from 'react-router-dom'


import '../styles/room-code.scss'

type RoomCodeProps = {
    code: string;

}

type RoomParams = {
    id: string;
}




export function RoomCode(props: RoomCodeProps) {
    const params = useParams<RoomParams>()

    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }



    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copiar codigo de sala" />
            </div>
            <span>Sala {params.id}</span>
        </button>
    )
}