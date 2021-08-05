import {ChildAsFC} from './Child';

const parent=()=>{
  return <ChildAsFC color='red' onClick={()=>console.log('Clicked')}>
  </ChildAsFC>
};

export default parent;