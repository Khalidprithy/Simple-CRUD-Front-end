import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';
import { GrAdd } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Products = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://simple-curd-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddProduct = () => {
        navigate('/addProduct')
    }

    const handleDelete = id => {
        fetch(`https://simple-curd-server.onrender.com/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
                toast.success('Deleted Successfully')
            })
    }

    return (
        <div className='mx-2'>
            <div className='flex justify-between px-10 py-4'>
                <p className='text-xl font-medium'>Product List</p>
                <p className='text-xl font-medium hidden md:block'>Total products: <span className='h-10 w-2 bg-slate-800 p-1 rounded-full text-white font-normal text-base'>0{products.length}</span> </p>
                <button
                    onClick={handleAddProduct}
                    className='flex items-center gap-1 bg-green-300 hover:bg-green-500 px-2 py-1 rounded-md font-medium'>Add Product <GrAdd></GrAdd></button>
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
                                    handleDelete={handleDelete}
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