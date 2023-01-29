
import "../mock/delets"
import axios,{AxiosPromise} from "axios"

function deletsa(key){
    axios.delete(`/abor/`,{
        params:{
            key: key
        }
    }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
  
}

export default deletsa
