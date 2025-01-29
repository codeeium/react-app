
-- mysql installation
brew cleanup

brew install mysql
mysql_secure_installation
brew services start mysql
mysql -u root -p rootroot
brew services stop mysql
brew uninstall mysql
brew remove mysql
brew cleanup
------------

brew install mysql
brew services start mysql
mysql_secure_installation
root/root
mysql -u root -p
CREATE DATABASE bagisto_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'bagisto_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON bagisto_db.* TO 'bagisto_user'@'localhost';
FLUSH PRIVILEGES;
mysql -u bagisto_user -p
SHOW DATABASES;
------


intervention/imagecache: This package is abandoned, and there might not be a direct replacement. If it's crucial to your project, you can continue using it, but be aware it won't receive updates.
paypal/paypal-checkout-sdk: Same situation; you should check for alternatives to avoid using this package long-term.

composer update intervention/imagecache intervention/imagecache       

-------




