import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])


    return (
        <div className='m-20'>
            <h4 className='text-2xl font-medium p-4'>Update your product</h4>
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img
                    className='w-60 h-60'
                    src={product.picture} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title"><span className='font-light'>Name: </span>{product.name}</h2>
                    <h2 class="card-title"><span className='font-light'>Brand: </span>{product.brand}</h2>
                    <h2 class="card-title"><span className='font-light'>Price: </span> ${product.price}</h2>
                    <h2 class="card-title"><span className='font-light'>Quantity: </span>{product.quantity}</h2>
                    <div class="card-actions justify-start">
                        <button class="btn btn-sm btn-success">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;