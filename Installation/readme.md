

php -v

sudo apt update
sudo apt install --reinstall php8.1

pm2 start php --name "backend" --cwd /home/ubuntu/bagisto -- artisan serve --host=0.0.0.0 --port=8000

-- ----------
sudo apt install composer

composer create-project bagisto/bagisto

---- 
sudo apt-get install php-mbstring

sudo apt-get install php-xml

sudo service apache2 restart

php -m | grep -E 'mbstring|dom'

composer install

sudo apt-get install --reinstall php8.1-cli php8.1-fpm php8.1-xml
php -i | grep extension_dir
dom.so

sudo apt-get install php8.1-mbstring
sudo nano /etc/php/8.1/cli/php.ini
extension=mbstring

composer update --with-all-dependencies

------
php artisan serve

-------
install php 8.2

sudo add-apt-repository ppa:ondrej/php -y
sudo apt update
sudo apt install php8.2 php8.2-cli php8.2-common php8.2-mbstring php8.2-xml php8.2-bcmath php8.2-curl php8.2-zip php8.2-mysql php8.2-gd php8.2-intl php8.2-fpm php8.2-pdo php8.2-tokenizer -y
sudo update-alternatives --set php /usr/bin/php8.2
php -v
php -m | grep pdo
sudo phpenmod pdo_mysql
sudo systemctl restart apache2  # or restart php-fpm if using Nginx


---------

-- clone and install..
git clone  https://github.com/bagisto/bagisto.git
cd bagisto
cp .env.example .env ( update t)
APP_URL=http://3.8.5.82:8000, DB_CONNECTION=mysql, DB_HOST=0.0.0.0 ,DB_PORT=3306 DB_DATABASE=bagisto DB_USERNAME=root DB_PASSWORD=root1234

php artisan key:generate
php artisan bagisto:install


------
node -v
sudo apt update
sudo apt install -y nodejs npm
sudo npm install -g pm2
pm2 -v
pm2 start php --name "backend" --cwd /home/ubuntu/bagisto -- artisan serve --host=0.0.0.0 --port=8000

pm2 startup
pm2 save