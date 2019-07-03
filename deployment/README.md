# deployment

salix-deployment

#generate configuration
cd config-template
PROJ=common __TAG=testtag PROJ_CONFIG_DIR=./ ./generate.sh prodk8s
OR
PROJ=salix __TAG=testtag ./generate.sh prodk8s

#clean
cd config-template
PROJ=common PROJ_CONFIG_DIR=./ ./clean.sh
OR
PROJ=salix ./clean.sh

#PUSH COMPONENT IMAGE
PUSH_IMAGE=true __TAG=testtag PROJ=salix __MODE_TYPE=prodk8s ./build_image.sh $conponent_name

#deploy component
./apply_one.sh $conponent_name

#create with folder name
cd script
PROJ=salix ./create.sh ../../k8syaml/serviceFE
PROJ=salix ./delete.sh ../../k8syaml/serviceFE

#local start
cd script/deploy
PROJ=salix BUILD=true ./local_run.sh salix-saas-management
PROJ=salix BUILD=true ./local_run.sh ( 如果项目根目录下存在 local_list.sh )

#local stop
cd script/deploy
PROJ=salix BUILD=true ./local_stop.sh fe-salix-asfood-ingress
PROJ=salix BUILD=true ./local_stop.sh ( 如果项目根目录下存在 local_list.sh )


#import deployment流程（具体参考salix-wrchain项目）
## 设置submodule
git submodule add ../../devops/deployment.git deployment

## 自定义gitlab ci
拷贝ci/.gitlab-ci.yml.tmpl -> 项目根目录下.gitlab-ci.yml

## 配置k8syaml文件夹
在根目录下新建k8syaml文件夹，文件夹结构为：
config-template: tmpl_list.sh(需要进行变量的文件)，config-$env.yaml(不同的环境中需要替换的变量值)
其他文件夹：k8s yaml配置文件（必须包括namespace.yaml, component_docker_registry.sh, component_ecr.sh。其他组件的yaml配置文件按需要配置）

## 不同的项目根据特性配置不同的变量文件
如：
java（配置src/main/resources/application-$env.properties）
ionic（配置.env.$env, build时首先读取 .env文件，如果有.env.$env，增量覆盖读取.env.$env；配置Docker/nginx/$env.conf）
vue（配置.env.$env, build时首先读取 .env文件，如果有.env.$env，增量覆盖读取.env.$env；配置Docker/nginx/$env.conf）
go (配置conf/config_$env.yaml, 配置script/prepare-build.sh作为build前的准备脚本执行自定义操作)

# 现有可选环境
VAR_CLUSTER_ENV_NAME:
	previewdk(测试docker启动)
	testk8s(测试k8s)
	prodk8s(生产k8s)

本地：
	dev

# 可选择的registry id
ecr
common

	