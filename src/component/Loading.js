import React, { useEffect, useState } from 'react';

export default function Loading() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 800)
    }, [])

    return (
        <div className={`${"loading-screen"} ${"project-animate"} ${!loading ? "hidden" : ""}`}>Mason Galat</div>
    );
};