---
tags:
  - Networking
  - Ingress
title: "Ingress-nginx"
description: "Ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer."
logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/500px-Nginx_logo.svg.png"
---
![logo](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/500px-Nginx_logo.svg.png){ align="right", width="200" }
# Ingress Nginx

=== "Description"

    The NGINX Ingress Controller is a solution for managing external access to applications running in a Kubernetes cluster.
    It acts as a reverse proxy and load balancer, routing traffic from outside the cluster to the appropriate services within.
    K0rdent, as a multi-cluster Kubernetes management platform, seamlessly integrates with the NGINX Ingress Controller to provide a unified solution for managing ingress across all your clusters. Here's how this integration works:
   
    - Simplified Deployment: K0rdent can automate the deployment and configuration of the NGINX Ingress Controller across your clusters, eliminating manual setup and ensuring consistency.
    - Centralized Management: Manage Ingress resources and configurations for all your clusters from the K0rdent control plane, providing a single point of control.
    - Policy-Driven Ingress: Leverage K0rdent's policy engine to enforce security and compliance policies for your Ingress configurations, ensuring consistency and best practices.
    - Monitoring and Observability: K0rdent integrates with monitoring tools to provide insights into the performance and health of your NGINX Ingress Controllers and the applications they expose

    <br>
    Looking for Commercial Support? [LEARN MORE](https://www.f5.com/products/nginx/nginx-ingress-controller){ target="_blank" .bold }

=== "Installation"

    Install Service template
    ~~~bash
    # k0rdent includes the template for Ingress-nginx out of the box
    ~~~

    Verify service template
    ~~~bash
    kubectl get servicetemplates -A
    # NAMESPACE    NAME                       VALID
    # kcm-system   ingress-nginx-4-11-3       true
    ~~~

    Deploy service template
    ~~~yaml
    apiVersion: k0rdent.mirantis.com/v1alpha1
    kind: ClusterDeployment
    # kind: MultiClusterService
    ...
      serviceSpec:
        services:
          - template: ingress-nginx-4-11-3
            name: ingress-nginx
            namespace: ingress-nginx
            values: |
              ingress-nginx:
                controller:
                  hostPort:
                    enabled: true
    ~~~

    <br>
    - [Official docs](https://kubernetes.github.io/ingress-nginx/){ target="_blank" }
