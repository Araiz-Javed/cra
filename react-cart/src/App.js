//There two typs of compont
//->Class componen
//->Functionsl Component we prefer it it is a javscriptunton and easy to read and binding free errors

// if we want ti return more than two elemens form functionn then e can wrap it in a div and return the div

// function App(){
//     return (
//        <div>
//            <h1>
//                hello world
//            </h1>
//            <p>
//                this is a paragraph
//            </p>
//        </div>
//     );
// }

// export default App;


// but if we do not want to use div we use this type of syxtax

// function App(){
//     return (
//        <>
//            <h1>
//                hello world
//            </h1>
//            <p>
//                this is a paragraph
//            </p>
//        </>
//     );
// }

// export default App;

// for addinng multiple pages in our website we have to add a library name (react-router-dom)

// usnig arrow function sytax

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home';
import SingleProduct from './Pages/SingleProuduct';
import About from './Pages/About';
import Products  from './Pages/Products';
import { Navgations  } from './components/Navgations';
import { Cart } from './Pages/Cart';
const App = () => {
    return (
       <>
        <Router>
            <Navgations />
            <Switch>
                <Route path='/' component={Home} exact ></Route>
                {/* <Route path='/About' component={About}></Route> */}
                <Route path="/Products" component={Products}></Route>
                <Route path="/Products/:_id" component={SingleProduct} ></Route>
                <Route path="/Cart" component={Cart}></Route>
            </Switch>
        </Router> 
       </>
    );
}

export default App;