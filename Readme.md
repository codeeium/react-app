

https://www.youtube.com/watch?v=VaJPdtuql8k


![img_1.png](img_1.png)



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