### What Is a Container?

A container is a lightweight, standalone, and executable unit of software that includes:

* Application code
* Dependencies
* Libraries
* Configuration files

It runs consistently across different computing environments by isolating the app from the underlying system.

### Key Characteristics

| Feature           | Description                                                                       |
| ----------------- | --------------------------------------------------------------------------------- |
| **Isolated**      | Runs in its own environment (filesystem, processes, network).                     |
| **Portable**      | Runs the same on laptops, servers, and cloud.                                     |
| **Lightweight**   | Shares the host OS kernel instead of needing a full OS (unlike virtual machines). |
| **Fast to start** | Boots up in seconds or less.                                                      |

### How a Container Works

Namespaces: Provide process and resource isolation (e.g., PID, network, file systems).
Control Groups (cgroups): Manage resource limits (CPU, memory, etc.).
The container runs on a container engine or runtime, such as:

Docker
containerd
CRI-O
Podman


#### Namespaces provided by the Linux Kernel.


**PID Namespace:**
.
Isolates the process tree, allowing processes to have their own process IDs (PIDs) independent of other namespaces. 

**Network Namespace:**
.
Isolates network resources, enabling processes to have their own network stack, interfaces, routing tables, and IP addresses. 

**Mount Namespace:**
.
Isolates the file system mount points, allowing processes to have their own view of the file system's mounted points. 

**UTS Namespace:**
.
Isolates the hostname and domain name of the system, allowing processes to have different hostnames and domain names from each other. 

**IPC Namespace:**
.
Isolates inter-process communication (IPC) resources, such as message queues, shared memory, and semaphores. 

**User Namespace:**
.
Isolates user IDs and group IDs, allowing processes to have different user and group IDs from other namespaces. 

**Control Group (cgroup) Namespace:**
.
Isolates resource control groups, allowing processes to be grouped and have their resource usage managed independently. 

