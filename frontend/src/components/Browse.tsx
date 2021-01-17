import React from 'react';
import { Category } from './Category';
import { Trending } from './Trending';

export const Browse: React.FC = () => {
    return (
        <div>
            <Category />
            <Trending />
        </div>
    );
};