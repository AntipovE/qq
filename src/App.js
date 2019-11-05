import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import  BtnPannel from './btn-pannel/btn-pannel';

class App extends Component {
    

    

    render(){
        
        const btnData = [
            {label: 'ДОБАВИТЬ МАСТЕР КЛАСС', visible:true ,img:false},
            {label: '', visible:true, img:'https://cdn.zeplin.io/5cf1108516309e0a5cb0b6d8/assets/B6DE1452-03B9-452C-9EB6-57F8A7E914C0.svg'},
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