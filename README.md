# VirtualBox Microservice Assignment

## Project Overview
This project demonstrates the creation and configuration of multiple Virtual Machines (VMs) using Oracle VirtualBox, establishing a private network between them, and deploying a microservice-based application across the connected VMs.

A Node.js and Express-based REST API is hosted on one virtual machine (Backend VM), and accessed from another virtual machine (Client VM) after both VMs are powered on and connected through a Host-Only network.

---

## Objective
- Create and configure multiple virtual machines using VirtualBox
- Establish network connectivity between the virtual machines
- Deploy and test a microservice-based application across the VMs

---

## Virtual Machines Used

### VM1 – Backend Server
- Operating System: Ubuntu 22.04 LTS  
- Role: Backend Microservice Host  
- IP Address: 192.168.186.3  
- Technology Stack: Node.js, Express.js  
- Listening Port: 3000  
- API Endpoint: /api  

### VM2 – Client
- Operating System: Ubuntu 22.04 LTS  
- Role: Client VM to consume the backend service  
- IP Address: 192.168.186.4  
- Tool Used: curl  
- Status: VM2 was powered on and used to test the backend microservice running on VM1  

---

## Network Configuration
- Network Type: Host-Only Adapter  
- Subnet: 192.168.186.0/24  

Both VM1 and VM2 were powered on simultaneously and connected to the same Host-Only network, enabling secure and direct VM-to-VM communication without internet dependency.

---

## Microservice Description
The backend microservice is a simple REST API built using Express.js and hosted on VM1.

### API Details
- Method: GET  
- Endpoint: /api  

### API Response
```json
{
  "message": "Hello from Backend VM"
}
The backend service listens on:

```
0.0.0.0:3000
```

---

## Application Testing (VM2 to VM1)

After powering on VM2, the backend service running on VM1 was tested using the following command:

```bash
curl http://192.168.186.3:3000/api
```

### Expected Output

```json
{"message":"Hello from Backend VM"}
```

This confirms:

* VM2 is operational
* Network connectivity between the virtual machines is established
* Backend microservice is functioning correctly

---

## Project Structure

```text
backend/
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Steps to Run the Project

### Step 1: Start the Virtual Machines

* Power on VM1 (Backend Server)
* Power on VM2 (Client)

### Step 2: Run the Backend Service on VM1

```bash
cd backend
npm install
node server.js
```

### Step 3: Test the Service from VM2

```bash
curl http://192.168.186.3:3000/api
```

---

## Architecture Design

* VM1 hosts the Node.js and Express backend microservice
* VM2 acts as the client and sends HTTP requests using curl
* Communication occurs through a VirtualBox Host-Only Network
* JSON responses are returned from VM1 to VM2

The architecture diagram illustrates VM connectivity, IP addresses, service roles, and the request-response flow between the virtual machines.

---

## Source Code Repository

The complete source code and documentation for this project are available at:

[https://github.com/kashishjoshi13/virtualbox-microservice-assignment](https://github.com/kashishjoshi13/virtualbox-microservice-assignment)

---

## Video Demonstration

A recorded video demonstration shows:

* Powering on both virtual machines
* Network configuration verification
* Backend service execution on VM1
* Successful API request from VM2 using curl

(Video link to be provided separately)

---

## Plagiarism Declaration

This project is an original implementation. Any form of plagiarism in code, documentation, or architecture may result in disqualification as per assignment guidelines.

---

## Author

Kashish Joshi
VirtualBox Microservice Assignment

```

