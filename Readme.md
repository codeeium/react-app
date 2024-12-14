

https://www.youtube.com/watch?v=VaJPdtuql8k


![img_1.png](img_1.png)

![img_2.png](img_2.png)



Here's the content organized in a table format suitable for a README file:



npm i pg 

-- Table: public.sales

-- DROP TABLE IF EXISTS public.sales;

CREATE TABLE IF NOT EXISTS public.sales
(
name character varying COLLATE pg_catalog."default",
id integer
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.sales
OWNER to dev1;

INSERT INTO public.sales(
name, id)
VALUES ('ellan', 4000);


select * from public.sales

----------
----------

-- Create sales table
CREATE TABLE sales (
id INT PRIMARY KEY,
name VARCHAR(100)
);

-- Create customers table
CREATE TABLE customers (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100)
);

-- Create orders table
CREATE TABLE orders (
id SERIAL PRIMARY KEY,
customer_id INT REFERENCES customers(id),
order_amount INT
);
