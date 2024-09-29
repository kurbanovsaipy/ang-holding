'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ShareBtn() {

    const [shareData, setShareData] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setShareData({
                title: "Анг холдинг",
                text: "",
                url: window.location.href,
            });
        }
    }, []);

    const getShare = async () => {
        if (!shareData) return; 

        try {
            await navigator.share(shareData);
        } catch (err) {
        }
    };

    if(!shareData) return null

    return (
        <button className="main_button big img" onClick={getShare}>
            <Image src={'/icons/share.svg'} width={35} height={35} alt=""/>
        </button>
    );
}