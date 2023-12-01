import React from "react";
import Lottie from 'react-lottie';
import animationData from "../../components/AnimationLoading/AnimationDelivery.json";
import './DeliveryPage.css'

export function DeliveryPage() {
    return (
        <div>
            <Lottie
                animationData={animationData}
                loop={false}
                autoplay={true}
                style={{ width: 250, height: 250 }}
            />
        </div>
    );
}
