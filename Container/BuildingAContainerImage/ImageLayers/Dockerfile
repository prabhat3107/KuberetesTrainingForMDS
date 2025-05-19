FROM docker.io/fedora
LABEL authors="prabhat"

RUN dnf install -y httpd && dnf clean all

CMD ["/usr/sbin/httpd", "-DFOREGROUND"]
