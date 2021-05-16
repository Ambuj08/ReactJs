import React, { Component } from 'react';
var ES6Promise = require("es6-promise");
ES6Promise.polyfill();
import './app.css'
class App extends Component {
constructor(props) {
super(props);
this.state = {
        information:{
            weight:[],
            height:[],
            name:[],
            base_exp:[],
            image:[]
        }
}
}//constructor

fetchPokemon=(url)=>{
    fetch(url)
    .then(response => response.json())
    .then(response => {
        if(response.results){
            response.results.map(ele =>{
                this.fetchPokemonDetails(ele.url)
            })
        }
    }).catch(error => console.log(error))
}
fetchPokemonDetails=(url)=>{
    fetch(url)
    .then(response => response.json())
    .then(response => {
      const {information } = this.state;
        if(response.name){
            information.name.push(response.name)
            information.weight.push(response.weight)
            information.height.push(response.height)
            information.base_exp.push(response.base_experience)
            information.image.push(response.sprites.other['official-artwork'].front_default)
        }
        this.setState({
            information
       })
      
    }).catch(error => console.log(error))
}
componentDidMount(){
    this.fetchPokemon('https://pokeapi.co/api/v2/pokemon')
}

render() {
    const{information}= this.state;
return (
<div className="app_comp">
    {information.name.map((ele,index) => {
//        console.log(ele)
        return (
            <div className="card" key = {ele +'name'}>
            <div className="container" key = {ele +'cnt'}>
                <img src={information.image[index]} className="pokeManImage" key = {ele +'img'}/>
                <h4 key = {ele +'h'}>Name: {ele}</h4>
                <p key = {ele +'p1'}>Height: {information.height[index]}</p>
                <p key = {ele +'p2'}>Weight: {information.weight[index]}</p>
                <p key = {ele +'p3'}>Base Experience: {information.base_exp[index]}</p>
            </div>
            </div>
        )
    })} 

</div>
);
}
}
export default App;