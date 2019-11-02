import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import  BtnPannel from './btn-pannel/btn-pannel';

class App extends Component {
    

    

    render(){
        
        const btnData = [
            {label: 'ДОБАВИТЬ МАСТЕР КЛАСС', visible:true ,img:false},
            {label: '', visible:true, img:'https://www.freeiconspng.com/minicovers/broom-png-33.png'},
            {label: 'ПОКАЗАТЬ МАСТЕР КЛАССЫ', visible:false ,img:false}


        ]


        return(
            <div>
                <h1 style={{color:'blue'}}> ПрЫВЭТ</h1>
                <BtnPannel btproperty={btnData}/>
            </div>
        )
    }
}    
export default App;