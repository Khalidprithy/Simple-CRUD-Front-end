import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Edit = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://simple-curd-server.onrender.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const handleUpdate = event => {
        event.preventDefault()

        const name = event.target.name.value;
        const brand = event.target.brand.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const picture = event.target.picture.value;

        const updatedProduct = { name, brand, price, quantity, picture }

        fetch(`https://simple-curd-server.onrender.com/products/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Your product updated')
                event.target.reset();
                navigate('/')

            })

    }


    return (
        <div className='m-20'>
            <h4 className='text-2xl font-medium p-4'>Update your product</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 bg-base-100 shadow-xl rounded-lg">
                <figure><img
                    className='w-64 h-64 rounded-md'
                    src={product.picture} alt="Movie" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title"><span className='font-light'>Name: </span>{product.name}</h2>
                    <h2 class="card-title"><span className='font-light'>Brand: </span>{product.brand}</h2>
                    <h2 class="card-title"><span className='font-light'>Price: </span> ${product.price}</h2>
                    <h2 class="card-title"><span className='font-light'>Quantity: </span>{product.quantity}</h2>

                </div>
                <form
                    onSubmit={handleUpdate}
                >
                    <div className='mt-10 flex flex-col mx-2'>
                        <input
                            className='bg-gray-200 px-1 rounded-md mb-2'
                            type="text" name="name" placeholder='Name' />
                        <input
                            className='bg-gray-200 px-1 rounded-md mb-2'
                            type="text" name="brand" placeholder='Brand' />
                        <input
                            className='bg-gray-200 px-1 rounded-md mb-2'
                            type="number" name="price" placeholder='Price' />
                        <input
                            className='bg-gray-200 px-1 rounded-md mb-2'
                            type="number" name="quantity" placeholder='Quantity' />
                        <input
                            className='bg-gray-200 px-1 rounded-md mb-2'
                            type="text" name="picture" placeholder='Photo URL' />
                    </div>
                    <input className='btn btn-sm btn:info hover:btn-success w-36 mx-auto m-2' type="submit" value='Update Product' />
                </form>
            </div>
        </div>
    );
};

export default Edit;