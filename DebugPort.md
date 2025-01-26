Here’s a summarized list of commands based on the steps:

### 1. **Check the Version of Amazon Linux**
To check which version of Amazon Linux you are using:

```bash
cat /etc/os-release
```

### 2. **Manage Firewall with `firewalld` (Amazon Linux 2)**

#### Check if `firewalld` is running:

```bash
sudo systemctl status firewalld
```

#### Start and enable `firewalld` if it's not running:

```bash
sudo systemctl start firewalld
sudo systemctl enable firewalld
```

#### Add a rule to allow traffic on port 3000:

```bash
sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent
sudo firewall-cmd --reload
```

### 3. **Verify Security Group Settings in AWS**
To ensure AWS security group allows traffic on port 3000:

- Go to **EC2 Dashboard** > **Security Groups**.
- Verify the inbound rule allows TCP traffic on port `3000`.

### 4. **Check if App is Bound to the Correct IP**
To check if your app is listening on the correct address (`0.0.0.0` for external access):

```bash
sudo netstat -tuln | grep 3000
```

You should see an entry like:
```
tcp        0      0 0.0.0.0:3000              0.0.0.0:*               LISTEN
```

If it's only listening on `127.0.0.1:3000`, the app will only be accessible locally. Make sure your app binds to `0.0.0.0`.

These steps should help you debug the issue. Let me know if anything else is unclear!

-----

ps aux | grep node
sudo netstat -tuln | grep 3000
sudo ufw allow 3000
sudo iptables -A INPUT -p tcp --dport 3000 -j ACCEPT
curl http://localhost:3000
curl http://13.40.188.131:3000
sudo systemctl restart your-app-service

sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent
sudo firewall-cmd --reload
sudo firewall-cmd --zone=public --add-port=5038/tcp --permanent
sudo firewall-cmd --reload