import React from 'react';

const products = [
    {
        id: 1,
        name: 'Laptop',
        description: 'High-performance laptop for professionals',
        price: 1200
    },
    {
        id: 2,
        name: '55" Samsung Television',
        description: 'Super-amoled display with 8k resolution',
        price: 1700
    },
    {
        id: 3,
        name: 'LG Washer',
        description: 'High-performance washing machine with stemming and drying capabilities',
        price: 700
    },
    {
        id: 4,
        name: 'LG Dryer',
        description: 'High-performance dryer for all types of drying needs',
        price: 600
    },
]

export default function ProductList() {
  return (
    <div>
        {products.map((data) => {
            return (
                <div key={data.id} style={{ border: "solid 1px"}}>
                    <h5>Product: {data.name}</h5>
                    <p>Description: {data.description}</p>
                    <p>Price: {data.price}</p>
                </div>
            )
        })}
    </div>
  )
}
