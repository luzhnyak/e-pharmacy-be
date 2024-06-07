DROP TABLE IF EXISTS users,
products,
suppliers,
customers,
orders,
income_expenses,
reviews,
pharmacies,
nearest_pharmacies CASCADE;

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    products (
        id SERIAL PRIMARY KEY,
        photo VARCHAR(255),
        name VARCHAR(255) NOT NULL,
        suppliers VARCHAR(255) NOT NULL,
        stock VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL
    );

CREATE TABLE
    suppliers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        suppliers VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        amount VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL
    );

CREATE TABLE
    customers (
        id SERIAL PRIMARY KEY,
        photo VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        spent VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        register_date VARCHAR(255) NOT NULL
    );

CREATE TABLE
    orders (
        id SERIAL PRIMARY KEY,
        photo VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        products VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL,
        order_date VARCHAR(255) NOT NULL
    );

CREATE TABLE
    income_expenses (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        amount VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL
    );

CREATE TABLE
    reviews (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        testimonial VARCHAR(255) NOT NULL
    );

CREATE TABLE
    pharmacies (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        rating VARCHAR(255) NOT NULL
    );

CREATE TABLE
    nearest_pharmacies (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        rating VARCHAR(255) NOT NULL
    );