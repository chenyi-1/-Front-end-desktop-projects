import list from './list'
import Mock from 'mockjs';





const delets = Mock.mock(RegExp("/abor/*" ),"delete",(options) => {

    let param = options.url
    
    let  key = param.slice(11)
    
    
    const fs = require('fs')

    const ws = fs.createWriteStream('./list.js')


    list.map((lists,index) => {
        
        if(lists.key == key){
            ws.write(list.splice(index,1))
           
        }
    })
})

export default delets