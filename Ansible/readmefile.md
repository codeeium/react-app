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
host: localhost
priv: "*.*:ALL,GRANT"
state: present
vars:
ansible_python_interpreter: /usr/bin/python3

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


ansible-playbook -i inventory.ini bagisto_setup.yml --become -vvvv

ansible-playbook -i inventory.ini install_mysql.yml --become -vvvv