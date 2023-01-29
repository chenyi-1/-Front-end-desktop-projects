import list from './list'
import Mock from 'mockjs';
const Inquire = Mock.mock(`/labor`,"get",(options)=>{
const arr = list;
//查询分页
function fenge(arr, N) {
   
    var result = [];
    for (var i = 0; i < arr.length; i += N) {
      result.push(arr.slice(i, i + N));
    }
    return result
  }
  let newData = fenge(arr, 15)
  return newData
  
})

export default Inquire