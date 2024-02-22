import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Teachers } from './Data';

function Duruus() {

    const [activeCategory, setActiveCategory] = useState(null);
    const [activeBook, setActiveBook] = useState(null);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryClick = (index) => {
        if (activeCategory === index) {
            setActiveCategory(null);
        } else {
            setActiveCategory(index);
            setActiveBook(null);
        }
    };


    const handleBookClick = (bookIndex) => {
        setActiveBook(activeBook === bookIndex ? null : bookIndex);
    };



    return (
        <aside className="py-7 absolute mt-20">
            <h2 className='text-center text-xl py-4'>Hapa tumeorodhesha sauti za
                Duruus, Hotuba, Mawaidha na Kalima mbali mbali za Mashekhe zetu</h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 space-y-4 py-8 w-full">
                {Teachers.map((teacher, teacherIndex) => (
                    <li key={teacher.name} className="text-xl md:mt-1 md:ml-2 inlin">
                        <button onClick={() => handleCategoryClick(teacherIndex)} className={activeCategory === teacherIndex ? 'active' : ''}>
                            <div className="flex items-center space-x-4 px-10">
                                <button className={`w-54 h-17 px-4 bg-purple-800	 rounded py-4 text-white font-Poppins ${activeCategory === teacherIndex ? 'active' : ''}`}
                                    onMouseEnter={() => { setHoveredCategory(teacherIndex); setActiveCategory(activeCategory === teacherIndex ? null : teacherIndex); }}
                                    onMouseLeave={() => setHoveredCategory(null)}>{teacher.name}</button>
                                {activeCategory === teacherIndex ? <ion-icon name="chevron-up" /> : <ion-icon name="chevron-down" />}
                            </div>
                        </button>
                        {activeCategory === teacherIndex && (
                            <ul className="category-list">
                                {teacher.categories.map((category, categoryIndex) => (
                                    <li key={category.name} className="text-xl md:mt-1 md:ml-2 block">
                                        <button onClick={() => handleBookClick(categoryIndex)} className={activeBook === categoryIndex ? 'active' : ''}>
                                            <div className="flex items-center space-x-4 px-15">
                                                <button className="w-full px-4 bg-green-500 rounded py-2 text-gray-500 font-Poppins ">{category.name}</button>
                                                {activeBook === categoryIndex ? <ion-icon name="chevron-up" /> : <ion-icon name="chevron-down" />}
                                            </div>
                                        </button>

                                        {activeBook === categoryIndex && (
                                            <ul className="book-list">
                                                {category.Books.map((book) => (
                                                    <li key={book.name} className="font-Poppins hover:text-blue-500">
                                                        <Link to={`/duruus/${teacher.name.replace(/\s+/g, '-').trim().toLowerCase()}/${category.name.replace(/\s+/g, '-').trim().toLowerCase()}/${book.name.replace(/\s+/g, '-').trim().toLowerCase()}`}>
                                                            {book.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Duruus;