import {Link} from 'react-router-dom'


export const Navgations = () => {
    const cartStyle={
            background:'#F59E0D',
            display:'flex',
            padding:'6px 12px',
            borderRadius:'50px'
    }
    return (
        // <div>
        //     <Link to="/" >Home</Link>
            
            
        //     <Link to="/About" >About</Link>
        // </div>

        
        <>
            <nav className="container mx-auto flex items-center justify-between py-4" >
                <Link to="/" >
                    <img style={{height:45}} src="/images/logo.png"alt="logo" ></img>
                </Link>

                <ul className="flex items-center">
                    <li className="ml-6">
                        <Link to="/" >Home</Link>
                    </li>

                    <li className="ml-6">
                        <Link to="/products" >Products</Link>
                    </li>

                    <li className="ml-6">
                        <Link to="/cart" >
                            <div style={cartStyle}>
                                <span className="text-white ml-1" >10</span>
                                <img className="mr-2" src="/images/cart.png" alt="cart-icon"/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
