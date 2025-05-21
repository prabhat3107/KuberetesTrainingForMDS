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