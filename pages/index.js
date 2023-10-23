import {useState} from "react";

/* --- --- */

function Header({title}) {
    return (<h1>{title ? title : 'default title'}</h1>);
}

export default function HomePage() {
    const [likes, setLikes] = useState(0);

    const names = ['a', 'b', 'c'];

    function handleClick() {
        console.log('increment like count');
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="react"/>
            <ul>
                {
                    names.map(name =>
                        <li key={name}>{name}</li>
                    )
                }
            </ul>
            <button onClick={handleClick}>Like({likes})</button>
        </div>
    );
}