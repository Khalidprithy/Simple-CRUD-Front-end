import React from 'react';
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {

    const { _id } = product;
    console.log((_id))

    const navigate = useNavigate();

    const handleEditProduct = id => {
        navigate(`/products/${id}`)
    }

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
                <div className='flex gap-1'>
                    <button
                        onClick={() => handleEditProduct(_id)}
                        className='bg-blue-400 py-1 px-2 rounded-md hover:bg-blue-600'>Edit</button>
                    <button className='bg-red-400 py-1 px-2 rounded-md hover:bg-red-600'>Delete</button>
                </div>
            </td>
        </tr>

    );
};


export default Product;