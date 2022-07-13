import React from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {

    const handleSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value;
        const brand = event.target.brand.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const picture = event.target.picture.value;

        const product = { name, brand, price, quantity, picture }

        fetch('https://damp-badlands-46617.herokuapp.com/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Your product added')
            })

    }

    return (
        <div>
            <h4 className='text-2xl font-medium p-4'>Add new product</h4>
            <form
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col w- mx-auto'>
                    <input className='rounded-md mb-2 h-8 w-80 mx-auto px-1' type="text" name="name" placeholder='Product Name' />
                    <input className='rounded-md mb-2 h-8 w-80 mx-auto px-1' type="text" name="brand" placeholder='Brand Name' />
                    <input className='rounded-md mb-2 h-8 w-80 mx-auto px-1' type="number" name="price" placeholder='Price' />
                    <input className='rounded-md mb-2 h-8 w-80 mx-auto px-1' type="number" name="quantity" placeholder='Quantity' />
                    <input className='rounded-md mb-2 h-8 w-80 mx-auto px-1' type="text" name="picture" placeholder='Photo URL' />
                    <input className='btn btn-sm btn:info hover:btn-success w-32 mx-auto m-2' type="submit" value='Add Product' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;