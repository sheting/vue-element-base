#!/bin/bash

# usage: $registry=MODE ./login.sh (MODE should in : [ecr, common])
ENV_NAME=${ENV_NAME:-'dev'}

if [[ "$registry" == "" ]]; then
    echo "ERROR: Not specified registry name."
    exit 1
fi

REGISTRY_CONF_PATH=../deployment/config-template/registry

source $REGISTRY_CONF_PATH/registry-$registry.env

echo "##############################"
echo "##### login"
echo "##############################"

CUR_REGISTRY_TYPE=${registry:-"$REGISTRY_TYPE"}
if [[ "ecr" == ${CUR_REGISTRY_TYPE} ]]; then
    #login
    $(aws ecr get-login --no-include-email --region cn-north-1)
    if [ $? != 0 ]; then
        echo "!!!Error: Login failed."
        exit 1
    fi
else
    docker login -u ${REGISTRY_USER} -p ${REGISTRY_PW} ${REGISTRY_URL} &> /dev/null
fi
