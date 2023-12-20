import React, { useState } from 'react';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../../src/App.css'
import '../../src/index.css'

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

    const handleCategoryClick = (index) => {
        setActiveCategory(activeCategory === index ? null : index);
        setActiveBook(null);
    };

    const handleBookClick = (bookIndex) => {
        setActiveBook(activeBook === bookIndex ? null : bookIndex);
    };

    return (
        <aside className="sidebar">
            <ul className="teacher-list">
                <li>
                    <h3>Shuyuukh</h3>
                </li>
                {Teachers.map((teacher, teacherIndex) => (
                    <li key={teacher.name} className="teacher-item">
                        <button>
                            {activeCategory === teacherIndex ? <BsChevronDown /> : <BsChevronRight />}
                            onClick={() => handleCategoryClick(teacherIndex)}
                            className={activeCategory === teacherIndex ? 'active' : ''}
                        </button>
                        {teacher.name}
                        {activeCategory === teacherIndex && (
                            <ul className="category-list">
                                {teacher.categories.map((category, categoryIndex) => (
                                    <li key={category.name} className="category-item">

                                        <button>
                                            {activeBook === categoryIndex ? <BsChevronDown /> : <BsChevronRight />}
                                            onClick={() => handleBookClick(categoryIndex)}
                                            className={activeBook === categoryIndex ? 'active' : ''}
                                        </button>

                                        {category.name}
                                        {activeBook === categoryIndex && (
                                            <ul className="book-list">
                                                {category.Books.map((book) => (
                                                    <li key={book.name} className="book-item">
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
