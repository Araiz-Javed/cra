interface ChildProps{
    color:string;
    onClick:()=>void;
}


export const Child=({color,onClick}:ChildProps)=>{
    return (
        <div>
            <h1>
                {color}
                <button onClick={onClick} >Click me</button>
            </h1>
        </div>
    )
}

// Explicit Component Type annotation

export const ChildAsFC:React.FC<ChildProps>=({color,onClick}:ChildProps)=>{
    return <div>
        {{color}}
        <button onClick={onClick} >Click me</button>
    </div>
}