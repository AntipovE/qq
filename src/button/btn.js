import React from 'react'; 
import './btn.css'


const  MdButton = ({label,visible,img}) => {

   function onBtnClick(){
       console.log(visible)
   }

   const bgImg = <img src ={img}/>

   
    let clsNm = 'btn_ok';
    if(visible ? true : clsNm = 'btn_na');
    
    return (
        <button
        className={clsNm}
        onClick ={onBtnClick}
        >
        {bgImg}
        {label}</button>
    )
}
export default MdButton;
