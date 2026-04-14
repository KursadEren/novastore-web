import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
            <h1 className="text-6xl sm:text-8xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Sayfa Bulunamadı</h2>
            <p className="text-slate-500 mb-6 text-center text-sm sm:text-base">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
            <Link to="/">
                <Button variant="primary">Ana Sayfaya Dön</Button>
            </Link>
        </div>
    );
}

export default NotFound;
