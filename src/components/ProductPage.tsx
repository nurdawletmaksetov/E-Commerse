import axios from 'axios';
import { useEffect, useState } from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    images: string[];
}

const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const navidgate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-yellow-500" />);
        }

        if (hasHalf) {
            stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
        }

        while (stars.length < 5) {
            stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-gray-300" />);
        }

        return stars;
    };


    useEffect(() => {
        if (id) {
            axios
                .get<Product>(`https://dummyjson.com/products/${id}`)
                .then((response) => {
                    setProduct(response.data);
                }).catch((error) => {
                    console.error("Error fetching product:", error);
                    navidgate("/");
                });
        }
    }, [id, navidgate]);

    if (!product) {
        <h1>Loading...</h1>
    }

    return (
        <>
            <div className='p-5 w-[60%]'>
                <button onClick={() => navidgate(-1)} className='mb-5 px-4 py-2 bg-black text-white rounded'>Back</button>
                <img
                    src={product?.images[0]}
                    alt={product?.title}
                    className='w-50% h-[400px] mb-5'
                />

                <h1 className='text-2xl mb-4 font-bold'>{product?.title}</h1>
                <p className='mb-4 text-gray-700 w-[70%]'>{product?.description}</p>
                <div className="flex gap-10 text-lg font-medium">
                    <p>Price: ${product?.price}</p>
                    <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(product?.rating || 0)}</div>
                        <span className="text-gray-600 text-sm">{product?.rating?.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage