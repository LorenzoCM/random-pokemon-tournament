import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Knockout = () => {

    const { store, actions } = useContext(Context);

    const pokemon = store.pokemon;

    const tournament = [[pokemon[0], pokemon[1]], [pokemon[2], pokemon[3]], [pokemon[4], pokemon[5]], [pokemon[6], pokemon[7]]];

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div>
                            <img className="card-img-top w-30 h-10 animate__animated animate__bounceInDown" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" />
                        </div>
                        <div>
                            <h2 className="animate__animated animate__bounceInDown"><b>Eliminatorias</b></h2>
                        </div>
                        {/* First Battle */}
                        <div className="card-group mt-5">
                            <div className="card mx-2 animate__animated animate__bounceInLeft">
                                <img className="card-img-top" src={store.pokemon[0].sprites.front_default} />
                                <div className="card-body">
                                    <h5 className="card-title name">{store.pokemon[0].name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Gotta catch'em all!</small>
                                </div>
                            </div>
                            <div className="card mx-2 animate__animated animate__bounceInRight">
                                <img className="card-img-top" src={store.pokemon[1].sprites.front_default} />
                                <div className="card-body">
                                    <h5 className="card-title name">{store.pokemon[1].name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Gotta catch'em all!</small>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-danger my-5" onClick={() => actions.pokemonBattle1(store.pokemon[0], store.pokemon[1], 1, tournament)}>¡FIGHT!</button>

                        {/* Second Battle */}
                        <div className="card-group mt-5 animate__animated animate__bounceInLeft">
                            <div className="card mx-2">
                                <img className="card-img-top" src={store.pokemon[2].sprites.front_default} />
                                <div className="card-body">
                                    <h5 className="card-title name">{store.pokemon[2].name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Gotta catch'em all!</small>
                                </div>
                            </div>
                            <div className="card mx-2">
                                <img className="card-img-top animate__animated animate__bounceInRight" src={store.pokemon[3].sprites.front_default} />
                                <div className="card-body">
                                    <h5 className="card-title name">{store.pokemon[3].name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Gotta catch'em all!</small>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-danger my-5" onClick={() => actions.pokemonBattle1(store.pokemon[2], store.pokemon[3], 3, tournament)}>¡FIGHT!</button>
                        {/* Third Battle */}
                        <div className="card-group mt-5 animate__animated animate__bounceInLeft">
                            <div className="card mx-2">
                                <img className="card-img-top" src={store.pokemon[4].sprites.front_default} />
                                <div className="card-body">
                                    <h5 className="card-title name">{store.pokemon[4].name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Gotta catch'em all!</small>
                                </div>
                            </div>
                            <div className="card mx-2 animate__animated animate__bounceInRight">
                                <img className="card-img-top" src={store.pokemon[5].sprites.front_default} />
                                <div className="card-body">
                                    <h5 className="card-title name">{store.pokemon[5].name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Gotta catch'em all!</small>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-danger my-5" onClick={() => actions.pokemonBattle1(store.pokemon[4], store.pokemon[5], 5, tournament)}>¡FIGHT!</button>
                        {/* Fourth Battle */}
                        <div className="card-group mt-5 animate__animated animate__bounceInLeft">
                            <div className="card mx-2">
                                <img className="card-img-top" src={store.pokemon[6].sprites.front_default} />
                                <div className="card-body">
                                    <h5 className="card-title name">{store.pokemon[6].name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Gotta catch'em all!</small>
                                </div>
                            </div>
                            <div className="card mx-2 animate__animated animate__bounceInRight">
                                <img className="card-img-top" src={store.pokemon[7].sprites.front_default} />
                                <div className="card-body">
                                    <h5 className="card-title name">{store.pokemon[7].name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Gotta catch'em all!</small>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-danger my-5" onClick={() => actions.pokemonBattle1(store.pokemon[6], store.pokemon[7], 7, tournament)}>¡FIGHT!</button><br/>

                        <Link to="/semifinal"><button type="button" className="btn btn-danger my-5">¡Ir a Semifinales!</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Knockout;