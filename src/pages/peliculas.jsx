import React, { useEffect, useState } from 'react';
import "../App.css";
import { Cargando } from '../components/cargando';
import { MensajeError } from '../components/MensajeError';
import data from "../data/sample.json"
import { Link } from 'react-router-dom';

const Peliculas = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [page, setPage] = useState(1); 

    useEffect(() => {
        setIsLoading(true);
        try {
            setTimeout(() => {
                setIsLoading(false);
                if (data === null) {
                    throw new Error('Error al cargar los datos');
                }
            }, 1000);
        } catch (error) {
            setIsLoading(false);
            setHasError(true);
        }
    }, []);

    if (isLoading) {
        return <Cargando />;
    }

    if (hasError) {
        return <MensajeError />;
    }

    const itemsPerPage = 5;
    const startIndex = (page - 1) * itemsPerPage;

    const filterMovies = data.entries
        .filter(entry => entry.releaseYear >= 2010 && entry.programType === "movie")
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(startIndex, startIndex + itemsPerPage); 
    const NumItem=data.entries.filter(entry => entry.releaseYear >= 2010 && entry.programType === "movie")
    const totalPages = Math.ceil(NumItem.length / itemsPerPage);

    return (
        <>
        {}
            <div className="movies-container">
                {filterMovies.map(movie => {
                    let words = movie.description.split(' ');

                    if (words.length > 30) {
                        words = words.slice(0, 30);
                    }

                    let shortDescription = words.join(' ');

                    return (
                        <div className="card" key={movie.title}>
                            <div className="front">
                                <img className="card-img-top" src={movie.images["Poster Art"].url} alt={movie.title} />
                                <div className="card-body">
                                    <p className="card-text">{movie.title}</p>
                                </div>
                            </div>
                            <div className="back">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{movie.releaseYear}</h6>
                                        <p className="card-text descripcion">{shortDescription}</p>
                                        <button type="button" className="btn btn-primary">Ver ahora</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='btn-content'>
                <button type="button" className="btn btn-primary" onClick={() => setPage(page - 1)} disabled={page === 1}>Anterior</button>
                <button type="button" className="btn btn-primary" onClick={() => setPage(page + 1)} disabled={page >= totalPages}>Siguiente</button>

            </div>
        </>
    );
}

export default Peliculas;
