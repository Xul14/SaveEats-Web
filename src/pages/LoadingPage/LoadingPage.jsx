import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../components/AnimationLoading/animationLoading.json';
import animationFood from '../../components/AnimationLoading/animationFood.json';
import './LoadingPage.css'

export const LoadingPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            navigate('/menu/home');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const animationOptionsFood = {
        loop: true,
        autoplay: true,
        animationData: animationFood,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="loading-screen">
            {loading ? (
                <>
                    <Lottie options={animationOptionsFood} height={400} width={400} />

                    <div className="loading-texts">
                        <span className='loading-bem-vindo'>Bem-Vindo!</span>
                        <span className='loading-text'>Estamos preparando o ambiente para você</span>
                        <span className='loading-text'>Aguarde um momento</span>
                        <Lottie options={animationOptions} height={200} width={200} />
                    </div>
                </>
            ) : null}
        </div>
    );
};

