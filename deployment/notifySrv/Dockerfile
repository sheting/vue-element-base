FROM golang:1.9.1-alpine3.6

RUN echo -e 'http://mirrors.ustc.edu.cn/alpine/edge/main\nhttp://mirrors.ustc.edu.cn/alpine/edge/community\nhttp://mirrors.ustc.edu.cn/alpine/edge/testing' > /etc/apk/repositories
RUN apk add --no-cache \
    bash 

RUN mkdir -p /go/src/github.com/chainnova/ci/notifySrv

WORKDIR /go/src/github.com/chainnova/ci/notifySrv

COPY . /go/src/github.com/chainnova/ci/notifySrv 

RUN cd /go/src/github.com/chainnova/ci/notifySrv && \
	pwd && ls -al && \
	rm -f notifySrv && \
	go build -v notifySrv.go && \
	ls -l |grep -E "\s+notifySrv$" && \
	chmod +x notifySrv

#ENTRYPOINT ["/bin/bash"]
ENTRYPOINT ["/bin/bash", "-c"]
CMD ["./notifySrv"]

EXPOSE 30222

