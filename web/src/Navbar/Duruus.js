import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsMicFill } from "react-icons/bs";
import { BsBook } from "react-icons/bs";


function Duruus() {
    const Teachers = [
        {
            id: 1,
            name: "Abu Feiswal Uthmaan Jilo",
            categories: [
                {
                    id: 1,
                    name: "Tawheed",
                    Books: [
                        {
                            id: 1,
                            name: "Kitaabu Tawheed",
                            content: "Content for Kitaabu Tawheed goes here..."
                        },
                        {
                            id: 2,
                            name: "Usulu Thalatha",
                            content: "Content for Usulu thalatha goes here"
                        },
                        {
                            id: 3,
                            name: "Qawaeed Arba",
                            content: "Content for Qawaed Arba Goes here"
                        },
                        // Add other books
                    ],
                },
                {
                    id: 2,
                    name: "Hadeeth",
                    Books: [
                        {
                            id: 4,
                            name: "Bukhaar",
                        },

                        {
                            id: 6,
                            name: "Ibn Majah",
                        },
                        // Add other books
                    ],
                },
                // Add other categories
            ],
        },
        {
            id: 2,
            name: "Abu Ibraheem Alamin Saeed",
            categories: [
                {
                    id: 1,
                    name: "Tawheed",
                    Books: [
                        {
                            id: 1,
                            name: "Kitaabu Tawheed",
                        },
                        {
                            id: 2,
                            name: "Usulu Thalatha",
                        },
                        {
                            id: 3,
                            name: "Qawaeed Arba",
                        },
                        // Add other books
                    ],
                },
                {
                    id: 2,
                    name: "Hadeeth",
                    Books: [
                        {
                            id: 4,
                            name: "Sahih Bukhaar",
                        },
                        {
                            id: 5,
                            name: "Muslim",
                        },
                        {
                            id: 6,
                            name: "Ibn Majah",
                        },
                        // Add other books
                    ],
                },
                // Add other categories
            ],
        },
        {
            id: 2,
            name: "Abu Issa Muhammad Issa",
            categories: [
                {
                    id: 1,
                    name: "Tawheed",
                    Books: [
                        {
                            id: 1,
                            name: "Kitaabu Tawheed",
                        },
                        {
                            id: 2,
                            name: "Usulu Thalatha",
                        },
                        {
                            id: 3,
                            name: "Qawaeed Arba",
                        },
                        // Add other books
                    ],
                },
                {
                    id: 2,
                    name: "Hadeeth",
                    Books: [
                        {
                            id: 4,
                            name: "Sahih Bukhaar",
                        },
                        {
                            id: 5,
                            name: "Muslim",
                        },
                        {
                            id: 6,
                            name: "Ibn Majah",
                        },
                        // Add other books
                    ],
                },
                // Add other categories
            ],
        },
        {
            id: 2,
            name: "Abu Uthmaan Nurein Uthmaan",
            categories: [
                {
                    id: 1,
                    name: "Tawheed",
                    Books: [
                        {
                            id: 1,
                            name: "Kitaabu Tawheed",
                        },
                        {
                            id: 2,
                            name: "Usulu Thalatha",
                        },
                        {
                            id: 3,
                            name: "Qawaeed Arba",
                        },
                        {
                            id: 4,
                            name: "Nawaqidh Islaam",
                        },
                        {
                            id: 4,
                            name: "Usulu Sittah",
                        },
                        // Add other books
                    ],
                },
                {
                    id: 2,
                    name: "Hadeeth",
                    Books: [
                        {
                            id: 4,
                            name: "Hadeeth Za Jawaamiu al Kalama",
                        },
                        {
                            id: 5,
                            name: "Sharhe ya Arbauna Nnawawy",
                        },
                        {
                            id: 6,
                            name: "Ibn Majah",
                        },
                        // Add other books
                    ],
                },
                {
                    id: 3,
                    name: "Khutwab",
                    Books: [
                        {
                            id: 5,
                            name: "Khutba za Ijumaa",
                        },
                        {
                            id: 6,
                            name: "Khutba za Idd",
                        },

                        // Add other books
                    ],
                },
                {
                    id: 4,
                    name: "Mihadhara",
                    Books: [
                        {
                            id: 7,
                            name: "Mihadhara Mbali Mbali",
                        },
                        {
                            id: 7,
                            name: "Misingi Kumi ya Kuitakasa Nafsi",
                        },
                        {
                            id: 7,
                            name: "Huqmu ya Nyimbo",
                        },
                        {
                            id: 7,
                            name: "Ziara Nairobi",
                        },
                        // Add other books
                    ],
                },
                {
                    id: 4,
                    name: "Ruduud",
                    Books: [
                        {
                            id: 7,
                            name: "Majibu Kwa Aweso",
                        },

                        {
                            id: 7,
                            name: "Maulid",
                        },
                        {
                            id: 7,
                            name: "Ubainifu wa Hakika Iliyofichwa Kuhusiana na Kadhia ya Lamu na Dawrah Iliyodaiwa ",
                        },
                        {
                            id: 7,
                            name: "Radd kwa Aliyemfadhilisha Bakake juu ya Swahaba Saad ibnu Muadh",
                        },
                        // Add other books
                    ],
                },
                {
                    id: 4,
                    name: "Fiqh",
                    Books: [
                        {
                            id: 7,
                            name: "Istiqbali Shahary Ramadhan",
                        },

                        {
                            id: 7,
                            name: "Qiyaamu Layl",
                        },
                        {
                            id: 7,
                            name: "Ujumbe Mfupi Juu ya Swaum",
                        },
                        {
                            id: 7,
                            name: "Nasaha za Imaam Abu Walidy al Baajy Kwa Wanawe",
                        },
                        // Add other books
                    ],
                },
                {
                    id: 4,
                    name: "Mawaidha",
                    Books: [
                        {
                            id: 7,
                            name: "Faaida Mukhtasira",
                        },

                        // Add other books
                    ],
                },
                {
                    id: 4,
                    name: "Bayaan",
                    Books: [
                        {
                            id: 7,
                            name: "Bayaan",
                        },


                        // Add other books
                    ],
                },
                // Add other categories
            ],
        },
        // Add other teachers
    ]

    const [activeCategory, setActiveCategory] = useState(null);
    const [activeBook, setActiveBook] = useState(null);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryClick = (index) => {
        if (activeCategory !== index) {
            setActiveCategory(index);
            setActiveBook(null);
        }
    };

    const handleBookClick = (bookIndex) => {
        setActiveBook(activeBook === bookIndex ? null : bookIndex);
    };



    return (
        <aside className="py-7 absolute mt-20">
            <li>
                <h3>Shuyuukh</h3>
            </li>
            <ul className="flex space-x-4">

                {Teachers.map((teacher, teacherIndex) => (
                    <li key={teacher.name} className="text-xl md:mt-1 md:ml-2 inlin">
                        <button onClick={() => handleCategoryClick(teacherIndex)} className={activeCategory === teacherIndex ? 'active' : ''}>
                            <div className="flex items-center space-x-4 px-10">
                                <button
                                    className={`bg-maroon rounded px-1 py-4 text-white font-Poppins uppercase ${activeCategory === teacherIndex ? 'active' : ''}`}
                                    onMouseEnter={() => {
                                        setHoveredCategory(teacherIndex);
                                        setActiveCategory(activeCategory === teacherIndex ? null : teacherIndex);
                                    }}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                >
                                    {teacher.name}
                                </button>
                                {activeCategory === teacherIndex ? <ion-icon name="chevron-up" /> : <ion-icon name="chevron-down" />}
                            </div>
                        </button>

                        {activeCategory === teacherIndex && (
                            <ul className="category-list">
                                {teacher.categories.map((category, categoryIndex) => (
                                    <li key={category.name} className="text-xl md:mt-1 md:ml-2 inline md:block hidden group-hover:rotate-180">
                                        <button onClick={() => handleBookClick(categoryIndex)} className={activeBook === categoryIndex ? 'active' : ''}>
                                            <div className="flex items-center space-x-4 px-10">

                                                <button className="bg-green-500 rounded px-1 py-2 text-gray-500 font-Poppins font-bold">{category.name}</button>
                                                {activeBook === categoryIndex ? <ion-icon name="chevron-up" /> : <ion-icon name="chevron-down" />}
                                            </div>

                                        </button>

                                        {activeBook === categoryIndex && (
                                            <ul className="book-list">
                                                {category.Books.map((book) => (
                                                    <li key={book.name} className="font-Poppins font-bold hover:text-blue-500">
                                                        <Link to={`/duruus/${teacher.name.replace(/\s+/g, '-').toLowerCase()}/${category.name.replace(/\s+/g, '-').toLowerCase()}/${book.name.replace(/\s+/g, '-').toLowerCase()}`}>
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