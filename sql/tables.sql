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
        photo VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        suppliers VARCHAR(255) NOT NULL,
        stock VARCHAR(255) NOT NULL,
        price REAL DEFAULT 0,
        category VARCHAR(255)
    );

CREATE TABLE
    suppliers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        amount REAL DEFAULT 0,
        status VARCHAR(255)
    );

CREATE TABLE
    customers (
        id SERIAL PRIMARY KEY,
        photo VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        spent REAL DEFAULT 0,
        phone VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        register_date VARCHAR(255)
    );

CREATE TABLE
    orders (
        id SERIAL PRIMARY KEY,
        photo VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        products REAL DEFAULT 0,
        price REAL DEFAULT 0,
        status VARCHAR(255),
        order_date VARCHAR(255)
    );

CREATE TABLE
    income_expenses (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        amount REAL DEFAULT 0,
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
        rating REAL DEFAULT 0
    );

CREATE TABLE
    lenearest_pharmaciesssons (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        rating REAL DEFAULT 0
    );