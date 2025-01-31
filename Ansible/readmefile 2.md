---
- name: Install and configure MySQL on Ubuntu EC2
hosts: mysql_servers
become: yes  # Use sudo without password prompts
vars:
ansible_python_interpreter: /usr/bin/python3  # Ensure Python 3 is used
mysql_root_password: "root1234"

tasks:
- name: Install MySQL Server
apt:
name: mysql-server
state: present
update_cache: yes

- name: Start and Enable MySQL Service
systemd:
name: mysql
state: started
enabled: yes

- name: Install MySQL dependencies for Python
apt:
name:
- python3-pymysql  # Use PyMySQL instead of MySQLdb
state: present

- name: Secure MySQL Root User
mysql_user:
name: root
password: "{{ mysql_root_password }}"
login_user: root
login_password: "{{ mysql_root_password }}"
host: 13.40.166.65
priv: "*.*:ALL,GRANT"
state: present

- name: Ensure MySQL root authentication uses password
command: >
mysql -u root -p{{ mysql_root_password }} -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '{{ mysql_root_password }}'; FLUSH PRIVILEGES;"
changed_when: false

- name: Create MySQL Database
mysql_db:
name: bagisto
state: present
login_user: root
login_password: "{{ mysql_root_password }}"

- name: Create MySQL Table
community.mysql.mysql_query:
login_user: root
login_password: "{{ mysql_root_password }}"
login_db: bagisto
query: "CREATE TABLE IF NOT EXISTS table1 (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(45));"

- name: Insert Data into MySQL Table
community.mysql.mysql_query:
login_user: root
login_password: "{{ mysql_root_password }}"
login_db: bagisto
query:
- "INSERT INTO table1 (name) VALUES ('Virat');"
- "INSERT INTO table1 (name) VALUES ('Sachin');"
- "INSERT INTO table1 (name) VALUES ('Dhoni');"
- "INSERT INTO table1 (name) VALUES ('ABD');"

# Separate Play for Bagisto Installation
- name: Install and configure Bagisto on Ubuntu
hosts: mysql_servers
become: yes
vars:
ansible_python_interpreter: /usr/bin/python3
mysql_root_password: "root1234"
bagisto_dir: "/var/www/bagisto"

tasks:
- name: Update apt packages
apt:
update_cache: yes

- name: Install required packages
apt:
name:
- php-cli
- unzip
- curl
- php-mbstring
- git
- php-xml
- php-bcmath
- php-curl
- php-zip
- mysql-client
- php-mysql
state: present

- name: Install Composer
shell: |
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
args:
creates: /usr/local/bin/composer

- name: Check if Bagisto is already installed
stat:
path: "{{ bagisto_dir }}/.env"
register: bagisto_installed

- name: Skip Bagisto Installation if already present
debug:
msg: "Bagisto is already installed."
when: bagisto_installed.stat.exists

- name: Install Bagisto if not installed
shell: composer create-project bagisto/bagisto {{ bagisto_dir }}
when: not bagisto_installed.stat.exists
args:
creates: "{{ bagisto_dir }}"

- name: Set .env Variables
copy:
dest: "{{ bagisto_dir }}/.env"
content: |
APP_URL=http://13.40.166.65:8000
DB_CONNECTION=mysql
DB_HOST=13.40.166.65
DB_PORT=3306
DB_DATABASE=bagisto
DB_USERNAME=root
DB_PASSWORD={{ mysql_root_password }}

- name: Run Bagisto setup commands
shell: |
php artisan key:generate
php artisan migrate --force
php artisan db:seed --force
php artisan vendor:publish --all --force
php artisan storage:link
args:
chdir: "{{ bagisto_dir }}"

- name: Set ownership and permissions
file:
path: "{{ bagisto_dir }}"
owner: www-data
group: www-data
recurse: yes
mode: "0755"
