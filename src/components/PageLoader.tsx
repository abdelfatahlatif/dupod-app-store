// components/PageLoader.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';

const PageLoader = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500); // fake delay to show spinner during navigation

        return () => clearTimeout(timeout);
    }, [location]);

    return (
        loading ? (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 9999,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(255, 255, 255, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <ProgressSpinner />
            </div>
        ) : null
    );
};

export default PageLoader;
