#!/bin/bash

NAMESPACE='redis-default'

#namespace
echo "########################################"
echo "############# create namespace #########"
echo "########################################"
kubectl create namespace $NAMESPACE
if [[ $? != 0 ]]; then
    echo "!!!Error: Failed to create namespace."
    exit 1
fi

echo "########################################"
echo "############# create compoment #########"
echo "########################################"
kubectl create -f ./master-tmpdeploy.yaml
kubectl create -f ./sentinel-service.yaml
kubectl create -f ./sentinel-deployment.yaml
kubectl create -f ./slave-statefulset.yaml
kubectl create -f ./slave-service.yaml


echo "########################################"
echo "############# delete tmp master pod #########"
echo "########################################"
#kubectl delete -f ./master-tmppod.yaml

exit 0
