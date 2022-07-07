import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    console.log(product);

    useEffect(() => {
        fetch(`http://localhost:3000/editProduct/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])


    return (
        <div>
            <h4>Edit Here {id}</h4>
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src={product.picture} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{product.name}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;