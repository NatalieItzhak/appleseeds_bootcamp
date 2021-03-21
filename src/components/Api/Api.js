import React from 'react';
import Axios from 'axios';


const random = 'https://api.chucknorris.io/jokes/random';
const categories = 'https://api.chucknorris.io/jokes/categories';
const randomByCate = 'https://api.chucknorris.io/jokes/random?';

class Api extends React.Component {
constructor(props) {
    super(props)
}
    state = {
        joke: '',
        categories: [],
        jokeByCat:'',
    }

    GetData = async (e) => {
        const res = await Axios.get(random);
        this.setState({joke: res.data.value});
    }

    async componentDidMount() {
        let res = await Axios.get(categories);
        this.setState({categories: res.data});
    }

    OnSelected = async (e) => {
        let selectedCate = e.target.value;
        let respone = await Axios.get(randomByCate + selectedCate);
        this.setState({jokeByCat: respone.data.value});
    } 

    render() {
        return (
            <div className='main'>
                <div >
                    <button type='submit' onClick={this.GetData} >
                     Click For Random Joke
                    </button>
                </div>
                <div >
                <h3>Joke:</h3>
                    {this.state.joke}
                </div>
                <div>
                    <div>
                    <h3>Joke by category:</h3>
                    { this.state.jokeByCat }
                    </div>
                    <select onChange={this.OnSelected}> 
                     { this.state.categories.map(cate => (<option key={cate}> {cate}</option>)) }
                    </select>
                </div>
            </div>
        );
    }
}

export default Api;

