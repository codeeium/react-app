#!/bin/bash

# Update system packages
echo "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install dependencies
echo "Installing necessary dependencies..."
sudo apt install -y apache2 mysql-server php php-cli php-fpm \
    php-mbstring php-xml php-zip php-bcmath php-curl php-mysql \
    unzip git curl

# Install Composer
echo "Installing Composer..."
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# Clone the Bagisto repository
echo "Cloning Bagisto repository..."
sudo git clone https://github.com/bagisto/bagisto.git /var/www/bagisto

# Set the correct permissions
echo "Setting correct permissions for Bagisto..."
sudo chown -R www-data:www-data /var/www/bagisto
sudo chmod -R 775 /var/www/bagisto/storage /var/www/bagisto/bootstrap/cache

# Configure Apache for Bagisto
echo "Configuring Apache..."
sudo bash -c 'cat > /etc/apache2/sites-available/bagisto.conf << EOF
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/bagisto/public
    ServerName your-ec2-public-ip

    <Directory /var/www/bagisto/public>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
EOF'

# Enable site and Apache mod_rewrite
echo "Enabling Apache site and rewrite module..."
sudo a2ensite bagisto.conf
sudo a2enmod rewrite
sudo systemctl restart apache2


# Configure Bagisto .env file
echo "Configuring Bagisto .env file..."
cd /var/www/bagisto
cp .env.example .env

# Install Bagisto dependencies using Composer
echo "Installing Bagisto dependencies..."
sudo composer install

# Generate application key
echo "Generating application key..."
sudo php artisan key:generate

# Run migrations
echo "Running database migrations..."
sudo php artisan migrate

# Set up storage symlinks
echo "Setting up storage symlinks..."
sudo php artisan storage:link

# Set permissions again
echo "Setting final permissions..."
sudo chown -R www-data:www-data /var/www/bagisto
sudo chmod -R 775 /var/www/bagisto/storage /var/www/bagisto/bootstrap/cache

# Restart Apache
echo "Restarting Apache service..."
sudo systemctl restart apache2

# Output the message to access the site
echo "Bagisto installation complete!"
echo "You can now access your Bagisto store at http://your-ec2-public-ip"

#/etc/apache2/sites-available/bagisto.conf update the ip address manually
# .env db name, username, password, ip:8000 manually