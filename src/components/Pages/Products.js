import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';
import { GrAdd } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddProduct = () => {
        navigate('/addProduct')
    }
    return (
        <div className='mx-2'>
            <div className='flex justify-between px-10 py-4'>
                <p className='text-xl font-medium'>Product List</p>
                <p className='text-xl font-medium'>Total products: <span className='h-10 w-2 bg-slate-800 p-1 rounded-full text-white font-normal text-base'>0{products.length}</span> </p>
                <button
                    onClick={handleAddProduct}
                    className='flex items-center gap-1 bg-green-300 hover:bg-green-500 px-2 py-1 rounded-md'>Add Product <GrAdd></GrAdd></button>
            </div>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => <Product
                                    key={product._id}
                                    product={product}
                                ></Product>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Products;