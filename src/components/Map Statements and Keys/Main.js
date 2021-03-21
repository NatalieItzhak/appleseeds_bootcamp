import React from 'react';
import Data from './Data';
import Name from './Name';
import Card from './Card';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            before90: []
        }
    }
    componentDidMount = () => {
        this.setState({data : Data})
       }
   
       bornBefore90 = () => {
         let list =  this.state.data.filter(item => {
          return Date.parse(item.birthday) < Date.parse('1-1-1990')
           })
           console.log(list)
           this.setState({before90 : list})
       }
       render() {
           return (
               <div>
                   {this.state.data.map(item => {
                     return  <p  key={item.name}> {item.name}</p>
                   })}
   
                   <button onClick={this.bornBefore90}>Get before 90</button>
                   <br></br>
                  
                    {this.state.before90.map(item => {
                      return <Card key={item.name} name={item.name} birthday={item.birthday} food={item.favoriteFoods} />
                    })}
               </div>
           )
       }
   }
   
   export default Main

    
