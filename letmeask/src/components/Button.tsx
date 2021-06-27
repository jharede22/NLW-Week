type ButtonProps = {
    text?: Array<string>;
}

export function MainButton(props: ButtonProps){
    return (
        <button>{props.text}</button>
    )
}