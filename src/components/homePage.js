import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const HomePage = () => {

    const { store, actions } = useContext(Context);

    const pokemon = store.pokemon;

    const tournament = [[pokemon[0], pokemon[1]], [pokemon[2], pokemon[3]], [pokemon[4], pokemon[5]], [pokemon[6], pokemon[7]]];

    return (
        <>
            <div className="container mt-5 no-gutters mx-auto">
                {
                    store.pokemon.length < 8 ?
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                        <div className="row text-center">
                            <div className="col-md-12">
                                <div>
                                    <img className="card-img-top w-50 h-30 animate__animated animate__bounceIn" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" />
                                </div>
                                <div>
                                    <p className="mt-5">¡Bienvenidos al mejor torneo pokemon! Ocho pokemones de la primera generación han sido escogidos aleatoriamente para librar combates de eliminación directa y demostrar ¡quien es el mejor! Acompañanos en esta divertida e intuitiva aventura para conocer ¡quien será el ganador!</p>
                                    <p className="mt-5"><b>Conoce quienes serán los 8 participantes en esta ocasión:</b></p>
                                </div>
                                <div className="card-group mt-5 animate__animated animate__backInUp">
                                    {
                                        tournament.map((item) => {
                                            return (
                                                item.map((item, index) => {
                                                    return (
                                                        <div className="card mx-2" key={index}>
                                                            <img className="card-img-top" src={item.sprites.front_default} />
                                                            <div className="card-body">
                                                                <h5 className="card-title name tiny">{item.name}</h5>
                                                                <p className="card-text"></p>                                                               
                                                            </div>
                                                            <div className="card-footer">
                                                                <small className="text-muted">Gotta catch'em all!</small>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            )
                                        })}
                                </div>
                                <Link to="/knockout"><button type="button" className="btn btn-danger my-5 animate__animated animate__backInUp">Iniciar Torneo</button></Link>


                                {/* <button type="button" className="btn btn-danger" onClick={() => tournament.map((element, index, array) => actions.pokemonBattle1(element[0], element[1], index, array))}>first round</button>
                                <div className="card-group mt-5">
                                    {
                                        store.semifinal.length > 1 &&
                                        store.semifinal.map((item, index) => {
                                            return (
                                                <div className="card mx-2" key={index}>
                                                    <img className="card-img-top" src={item.sprites.front_default} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name}</h5>
                                                        <p className="card-text"></p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <small className="text-muted">Gotta catch'em all!</small>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <button type="button" className="btn btn-danger" onClick={() => actions.pokemonBattle1(store.semifinal[0], store.semifinal[1], 0, [1, 2])}>Semifinals1</button>
                                <button type="button" className="btn btn-danger" onClick={() => actions.pokemonBattle1(store.semifinal[2], store.semifinal[3], 0, [1, 2])}>Semifinals2</button>
                                <button type="button" className="btn btn-danger" onClick={() => actions.pokemonBattle1(store.final[0], store.final[1], 0, [1])}>Final</button> */}
                            </div>
                        </div>
                }
            </div>           
        </>
    )
}


export default HomePage;