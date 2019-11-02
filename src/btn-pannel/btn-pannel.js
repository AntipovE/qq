import React from 'react'; 
import MdButton from '../button/btn';




const  BtnPannel = ({btproperty}) => {

    const elements =  btproperty.map((item)=>{
        return(
                <div>
                    <MdButton {... item}
                    />
                </div>
        );
    });

    return (
        <div>
             {elements}
        </div>
        
    );
};


export default BtnPannel;