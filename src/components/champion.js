import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Champion = () => {

    const { store, actions } = useContext(Context);

    const pokemon = store.pokemon;

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const tournament = [[pokemon[0], pokemon[1]], [pokemon[2], pokemon[3]], [pokemon[4], pokemon[5]], [pokemon[6], pokemon[7]]];

    return (
        <>
            <div className="container mt-5 animate__animated animate__bounceIn">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div>
                            <Link to="/"><img className="card-img-top w-30 h-10 img_home" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" /></Link>
                        </div>
                        <div className="mt-5">
                            <h1><b>¡Contemplen al campeón!</b></h1>
                        </div>
                        <div className="card-group">
                            <div className="card mx-2">
                                <img className="card-img-top" src={store.winner[0].sprites.front_default} />
                                <div className="card-body">
                                    <h5 className="card-title champion_name">{store.winner[0].name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Gotta catch'em all!</small>
                                </div>
                            </div>                            
                        </div>                                                                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default Champion;