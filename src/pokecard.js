import { Component } from "react";
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component{
    render() {
        let imgSrc=`${ POKE_API}${padToThree(this.props.id)}.png`
        return (
            <div className="Pokecard">
                <h1 className='pokdecard-title'>{this.props.name}</h1>
               <div className='Pokecard-img'> <img src={imgSrc} alt='' /></div>
                <div className='pokecard-data'>Type : {this.props.type}</div>
                <div className='pokecard-data'>EXP : { this.props.exp}</div>
            </div>
        )
    }
}
export default Pokecard;
//0098