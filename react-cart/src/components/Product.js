const Product=(props)=>{
    console.log(props)
    return(
        <div className="gird grid-cols-5 my-8 gap-24">

            <div>
                <img src="/images/peproni.png" alt="pizza"/>
            </div>


            <div className="text-center">
                <h2 className="text-lg font-bold py-2">{props.prod.name}</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{props.prod.size}</span>
            </div>


            <div className="flex justify-between items-center mt-4">
                <h2>$ {props.prod.price}</h2>
                <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">Add </button>
            </div>
        </div>
    )
}

export default Product