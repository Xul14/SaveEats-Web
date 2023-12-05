import React from "react";
import Lottie from 'react-lottie';
import animationData from "../../components/AnimationLoading/AnimationDelivery.json";
import './DeliveryPage.css'

export function DeliveryPage() {

    const animationOption = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="animatioMotoboy">
            <Lottie options={animationOption} style={{ width: "100%", height: "250px"}} />
        </div>
    );
}
