import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Final = () => {

    const { store, actions } = useContext(Context);

    const pokemon = store.pokemon;

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const tournament = [[pokemon[0], pokemon[1]], [pokemon[2], pokemon[3]], [pokemon[4], pokemon[5]], [pokemon[6], pokemon[7]]];

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div>
                            <img className="card-img-top w-30 h-10 animate__animated animate__bounceInDown" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" />
                        </div>
                        <div>
                            <h2 className="animate__animated animate__bounceInDown"><b>¡Gran Final!</b></h2>
                        </div>
                        {/* First Battle */}
                        <div className="card-group mt-5">
                            <div className="card mx-2 animate__animated animate__bounceInLeft">
                                <img className="card-img-top" src={store.final[0].sprites.front_default} />
                                <div className="card-body">
                                    <h5 className="card-title name">{store.final[0].name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Gotta catch'em all!</small>
                                </div>
                            </div>
                            <div className="card mx-2 animate__animated animate__bounceInRight">
                                <img className="card-img-top" src={store.final[1].sprites.front_default} />
                                <div className="card-body">
                                    <h5 className="card-title name">{store.final[1].name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Gotta catch'em all!</small>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-danger my-5" onClick={() => actions.pokemonBattle1(store.final[0], store.final[1], 1, [])}>¡FIGHT!</button><br/>
                        <Link to="/champion"><button type="button" className="btn btn-danger my-5">¡Ver al campeón!</button></Link>                                            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Final;