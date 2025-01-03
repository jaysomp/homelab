### My Homelab Setup for Self-Hosted Services

I run all these services in Docker containers to keep things simple. If you want to set this up yourself, you’ll need Docker installed. For reference, I’m using **Ubuntu 22.04.5 LTS**, but this guide should work on any system with Docker.

---

### 1. **Portainer**
**Portainer** is a user-friendly container management platform. It simplifies deploying and managing containerized apps across Docker, Docker Swarm, and Kubernetes. With its web-based interface, you can easily manage containers, images, networks, and volumes without diving deep into the command line. It’s available in free (Community Edition) and paid (Business Edition) versions, making it ideal for developers and DevOps teams.

Here’s how I set it up:

```bash
docker volume create portainer_data

docker run -d -p 9443:9443 -p 8000:8000 \
  --name portainer --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v portainer_data:/data \
  portainer/portainer-ce:latest
```

I use Portainer to manage Docker containers from any device without needing to SSH into my server or use the Docker CLI.  

**Learn more about Portainer**: [YouTube Video](https://youtu.be/iX0HbrfRyvc?si=8sCZefC-st7JR-Ho)

---

### 2. **OpenWebUI for Self-Hosted LLMs Using Ollama**
**OpenWebUI** is a front-end, ChatGPT-like interface for using self-hosted large language models. I rely on **local AI** models daily because they’re free to use and perform exceptionally well on decent systems. OpenWebUI provides a GUI to access my models from any device at home, bypassing the Ollama CLI.

**Setup:** Follow the guides here:  
- [Ollama Setup](https://ollama.com/download)  
- [OpenWebUI Docs](https://docs.openwebui.com/)  

**More about OpenWebUI and Ollama**: [YouTube Video](https://youtu.be/Wjrdr0NU4Sk?si=jgMVYW-U7frBNxxx)

---

### 3. **Kasm Workspaces**
**Kasm Workspaces** lets you access applications and desktop environments through a web browser. Using container technology, it creates secure, isolated workspaces that are easy to manage and scale.  

I use Kasm to spin up quick instances of Linux distros, like running an isolated **Kali Linux** container for CTF challenges. You can even run a containerized browser within your browser—it’s incredibly versatile.

Instead of running Kasm Workspaces normally, I use the Docker container version provided by **LinuxServer.io**.  

**Setup Guide:** [LinuxServer.io Docs](https://docs.linuxserver.io/images/docker-kasm)  
**Video Overview:** [YouTube Video](https://youtu.be/1mb835Qsx-8?si=ySqyPs5f61yXVlRp)

---

### 4. **Uptime Kuma**
I use **Uptime Kuma** to monitor the status of my personal webpage. The setup is super simple:

```bash
# Create a volume
docker volume create uptime-kuma

# Start the container
docker run -d --restart=always \
  -p 3001:3001 -v uptime-kuma:/app/data \
  --name uptime-kuma louislam/uptime-kuma:1
```

---

### 5. **Custom Dashboard for My Homelab**
My custom dashboard, built with **React + Vite**, provides a clean interface for accessing all my services from any device.

**To set it up:**

1. Clone the repository:
   ```bash
   git clone https://github.com/jaysomp/homelab-dash.git
   ```

2. Edit the configuration:  
   Go to `/src/config/network.ts` and update the IP address and ports for your services.

3. Build the dashboard:
   ```bash
   docker build -t homelab-dashboard .
   ```

4. Run the container:
   ```bash
   docker run -d -p 3030:3000 --name homelab-dashboard homelab-dashboard
   ```

You can change the first port (`3030`) to any port you prefer for accessing the dashboard.


