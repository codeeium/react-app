# AWS provider configuration
provider "aws" {
region = "eu-west-2"  # Replace with your preferred AWS region
}

# Security group to allow SSH, MySQL, and HTTP traffic
resource "aws_security_group" "sg" {
name        = "mysql-sg"
description = "Allow SSH, MySQL, and HTTP traffic"

ingress {
from_port   = 22
to_port     = 22
protocol    = "tcp"
cidr_blocks = ["0.0.0.0/0"]  # SSH
}

ingress {
from_port   = 3306
to_port     = 3306
protocol    = "tcp"
cidr_blocks = ["0.0.0.0/0"]  # MySQL
}

ingress {
from_port   = 80
to_port     = 80
protocol    = "tcp"
cidr_blocks = ["0.0.0.0/0"]  # HTTP for Apache
}

egress {
from_port   = 0
to_port     = 0
protocol    = "-1"
cidr_blocks = ["0.0.0.0/0"]  # Allow all outbound traffic
}
}

# EC2 Instance for MySQL and Apache
resource "aws_instance" "mysql_instance" {
ami           = "ami-091f18e98bc129c4e"  # Ubuntu AMI (update to your region)
instance_type = "t2.micro"
key_name      = "28-Jan-2025-pair-key"  # Replace with your AWS key pair

security_groups = [aws_security_group.sg.name]

# User data script to install Apache and MySQL
user_data = <<-EOF
#!/bin/bash
set -e  # Stop script on error

              # Update the system
              sudo apt update -y

              # Install Apache HTTP Server
              sudo apt install -y apache2
              sudo systemctl enable apache2
              sudo systemctl start apache2

              # Install MySQL server
              sudo apt install -y mysql-server
              sudo systemctl enable mysql
              sudo systemctl start mysql

              # Secure MySQL root user
              sudo mysql -e "
              ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root1234';
              FLUSH PRIVILEGES;
              "

              sudo mysql -e "CREATE DATABASE bagisto;"
              sudo mysql -e "USE bagisto; CREATE TABLE table1 (id INT, name VARCHAR(45));"
              sudo mysql -e "INSERT INTO table1 VALUES(1, 'Virat'), (2, 'Sachin'), (3, 'Dhoni'), (4, 'ABD');"
              sudo mysql -e "SELECT * FROM table1;"

              # Create a sample database and table
              sudo mysql -e "CREATE DATABASE mysql_test;"
              sudo mysql -e "USE mysql_test; CREATE TABLE table1 (id INT, name VARCHAR(45));"
              sudo mysql -e "INSERT INTO table1 VALUES(1, 'Virat'), (2, 'Sachin'), (3, 'Dhoni'), (4, 'ABD');"
              sudo mysql -e "SELECT * FROM table1;"

              # Allow HTTP, MySQL, and SSH traffic
              sudo ufw allow 22/tcp
              sudo ufw allow 80/tcp
              sudo ufw allow 3306/tcp
              sudo ufw --force enable
              #
              # #!/bin/bash
              # sudo apt update -y
              # sudo apt install -y php-cli unzip curl php-mbstring git php-xml php-bcmath php-curl php-zip mysql-client php-mysql
              #
              # # Install Composer
              # curl -sS https://getcomposer.org/installer | php
              # sudo mv composer.phar /usr/local/bin/composer
              #
              # # Install Bagisto
              # composer create-project bagisto/bagisto /var/www/bagisto
              # cd /var/www/bagisto
              #
              # # Set .env Variables
              # cp .env.example .env
              # sed -i 's|APP_URL=.*|APP_URL=http://localhost:8000|' .env
              # sed -i 's|DB_CONNECTION=.*|DB_CONNECTION=mysql|' .env
              # sed -i 's|DB_HOST=.*|DB_HOST=localhost|' .env
              # sed -i 's|DB_PORT=.*|DB_PORT=3306|' .env
              # sed -i 's|DB_DATABASE=.*|DB_DATABASE=bagisto|' .env
              # sed -i 's|DB_USERNAME=.*|DB_USERNAME=root|' .env
              # sed -i 's|DB_PASSWORD=.*|DB_PASSWORD=root1234|' .env
              #
              # php artisan key:generate
              # php artisan migrate
              # php artisan db:seed
              # php artisan vendor:publish --all
              # php artisan storage:link
              #
              # sudo chown -R www-data:www-data /var/www/bagisto
              # sudo chmod -R 755 /var/www/bagisto
              EOF

tags = {
Name = "Clean-MySQL-Instance"
}
}

# Output the public IP of the EC2 instance
output "instance_public_ip" {
value = aws_instance.mysql_instance.public_ip
}
