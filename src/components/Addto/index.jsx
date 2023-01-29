
import { Input,Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom'
const { TextArea } = Input;
const Addto = () => {
  const navigate = useNavigate()
  function goBack(){
    navigate(-1)
  }
  
return(
   <>
  <Input placeholder="日期" />
  <br />
  <br />
  <Input placeholder="Basic usage" />
  <Button onClick={goBack}>返回</Button>
  <Button>添加</Button>
  </>
)
 
};
export default Addto;