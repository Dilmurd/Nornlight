"use client";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Products.scss";
import Loading from "../Loading/Loading";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://6787c546c4a42c9161082bb5.mockapi.io/blog");
                if (!res.ok) throw new Error("Failed to fetch products");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div className="load"><Loading/></div>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main>
            <section className="products">
                <div className="container">
                    <div className="products__top">
                        <h1>Популярные товары</h1>
                        <button>
                            Все товары <FaLongArrowAltRight />
                        </button>
                    </div>
                    <div className="products__wrapper">
                        {products?.map((item) => (
                            <div key={item.id} className="products__item">
                                <div className="products__img">
                                    <img className="products__img" src={item.url} alt=""/>
                                </div>
                                <div className="products__icon">
                                    <FaRegHeart />
                                </div>
                                <p className="products__title">{item.name}</p>
                                <div className="products__price">
                                    <del>{item.price}</del>
                                    <p>{item.price}</p>
                                </div>
                                <div className="pro__icon">
                                    <button><MdOutlineShoppingCart /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;
