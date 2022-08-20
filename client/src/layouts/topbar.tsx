import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Topbar = ({ children }: React.PropsWithChildren) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col w-full h-full">
            <div className="h-20 bg-poke-red flex justify-center items-center shadow-md">
                <div
                    className="cursor-pointer font-bold text-5xl text-poke-yellow hover:text-poke-yellow-dark"
                    onClick={() => navigate('/')}
                >
                    Pokemon Dictionary
                </div>
            </div>
            <div className="flex-1">{children}</div>
        </div>
    );
};
