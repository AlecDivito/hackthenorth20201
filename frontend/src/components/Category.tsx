import React from 'react';

const categories = [
    { name: 'Into the woods', type: 'Forest Soundscape Playlist'}, 
    { name: 'Interstellar', type: 'category'},
    { name: 'Downtown', type: 'category'},
    { name: 'Chill', type: 'category'},
    { name: 'Night Life', type: 'category'}, 
    { name: 'Adrenaline', type: 'category'},
    { name: 'Urban', type: 'category'},
    { name: 'Exotic', type: 'category'},
    { name: 'Oceanic', type: 'category'}
];

export const Category: React.FC = () => {
    return (
        <div className="category-panel">
            Categories
        </div>
    );
};