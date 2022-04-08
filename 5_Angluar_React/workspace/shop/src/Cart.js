import React, {useState} from "react";
import { Table } from "react-bootstrap";
import{ connect, useSelector, useDispatch } from 'react-redux';

function Cart(props) {
  let state = useSelector((state)=> state.reducer);
  console.log(state.reducer);
  let dispatch = useDispatch();
  let [title, setTitle] = useState(''); 
  let [num, setNum] = useState('');
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
            {
               state.map((item, i)=>{
                   return(
                    <tr key={i}>                        
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quan}</td>
                        <td><button onClick={()=>{dispatch({type: 'INCREASE', no:item.id, gasu:Number(item.quan)})}}> + </button>
                        <button onClick={()=>{dispatch({type: 'DECREASE', no:item.id, gasu:Number(item.quan)})}}> - </button></td>
                    </tr>
                   )
               }) 
            }
        </tbody>
      </Table>
      <div>
        상품명 : <input onChange={(e)=>{setTitle(e.target.value)}} type={title} /> <br />
        개수 : <input onChange={(e)=>{setNum(e.target.value)}} type={num} /> <br />
        <button onClick={() =>{let item = {
            title: title,
            num: num,
          };
          console.log(item);
          console.log(item.title);
          console.log(item.num);
          dispatch({type:'ADDCART',item})}}>추가하기</button>
      </div>


      {
        props.alertClose === true ?
          <div className="my-alert-yellow">
            <p>신규 구매하는 분들에게는 30% 할인</p>
            <button onClick={() => {props.dispatch({type: 'alertClose'})}} className='btn btn-primary mt-3'>닫기</button>            
          </div>
          :
          null
      } 
      
      
      
    </div>
  );
}
export default Cart;

// function stateStatus(state){
//     console.log(state);
//     return {
//         state : state.reducer,
//         alertClose : state.reducerClose,
//     }
// }
// export default connect(stateStatus)(Cart);
