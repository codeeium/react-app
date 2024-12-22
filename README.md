![img.png](img.png)

mongodb mongod --version

db version v8.0.4
Build Info: {
"version": "8.0.4",
"gitVersion": "bc35ab4305d9920d9d0491c1c9ef9b72383d31f9",
"modules": [],
"allocator": "system",
"environment": {
"distarch": "x86_64",
"target_arch": "x86_64"
}
}

1803  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n
1804  brew --version\n
1805  brew tap mongodb/brew\n
1806  brew install mongodb-community\n
1807  brew services start mongodb-community\n
1808  mongod --version\n
1809  clear
1810  mongod --version\n

![img_1.png](img_1.png)


Here's how to **install MongoDB** on your Mac using Homebrew.

---

### **Step 1: Install Homebrew (if not installed)**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
- Verify Homebrew installation:
  ```bash
  brew --version
  ```

---

### **Step 2: Tap MongoDB Repository**
```bash
brew tap mongodb/brew
```

---

### **Step 3: Install MongoDB Community Edition**
```bash
brew install mongodb-community
```

---

### **Step 4: Start MongoDB as a Service**
```bash
brew services start mongodb-community
```
- This runs MongoDB in the background at startup.

**To stop the service:**
```bash
brew services stop mongodb-community
```

---

### **Step 5: Verify Installation**
```bash
mongod --version
```
If successful, it will display the installed MongoDB version.

---

### **Step 6: Start `mongosh` (MongoDB Shell)**
```bash
mongosh
```
- This opens the interactive MongoDB shell.
- Use it to interact with the database.

---

### **Additional Commands:**
- **Restart MongoDB:**
  ```bash
  brew services restart mongodb-community
  ```  
- **Manual Start (without background service):**
  ```bash
  mongod
  ```

---

### **Where is MongoDB Installed?**
- **Data Directory:** `/usr/local/var/mongodb`
- **Log Directory:** `/usr/local/var/log/mongodb`
- **Config:** `/usr/local/etc/mongod.conf`

---

Let me know if you need help with setting up or configuring MongoDB further!

---


mongodb mongosh
Current Mongosh Log ID:	67681f95024175621a73a585
Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.7
Using MongoDB:		8.0.4
Using Mongosh:		2.3.7

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
The server generated these startup warnings when booting
2024-12-22T14:17:10.896+00:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------
mongodb://localhost:27017/

127.0.0.1:27017


--------


Om Bheem Bush

source .zshrc
export PATH=${PATH}:/Users/developer1/mongodb-macos-x86_64-8.0.4/bin

mongod --dbpath=/Users/developer1/data/db

PORT=5001 node server.mjs
