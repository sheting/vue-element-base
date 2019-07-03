#!/bin/bash

# build static
START=$(date +"%s")

export SCRIPT_DIR="../utils"

BASE_TAG=${BASE_TAG:-'3.0.0'}
SERVICE_BASE_TAG=${SERVICE_BASE_TAG:-'3.0.0'}

echo '*** CHECK PARA ***'
if [[ $REGISTRYNAME == "" || $BASE_BUILD_REPOSITORY == "" || $BASE_DEV_REPOSITORY == "" || $BASE_SERVICE_REPOSITORY == "" || $BASE_TAG == "" || $SERVICE_BASE_TAG == "" ]]; then
    echo "!!!Error: Missing para. REGISTRYNAME OR BASE_BUILD_REPOSITORY OR BASE_DEV_REPOSITORY OR BASE_SERVICE_REPOSITORY OR BASE_TAG OR SERVICE_BASE_TAG. Component Name: $1"
    echo "REGISTRY_NAME: $REGISTRYNAME"
    exit 1
fi

CHECK_BUILD=$(date +"%s")

echo
echo "********************* check $BASE_BUILD_REPOSITORY begin *********************"
IMAGE_LOCAL_BUILD="$BASE_BUILD_REPOSITORY:$BASE_TAG"
docker images | grep -q -E "^$BASE_BUILD_REPOSITORY\s+$BASE_TAG\s+"
if [[ $? != 0 || $ALWAYS_PULL == "true" ]]; then
    echo "Need to pull $IMAGE_LOCAL_BUILD"
    cd $SCRIPT_DIR
    registry=$REGISTRYNAME ./pull_image.env.sh $IMAGE_LOCAL_BUILD
    res=$?
    cd - &> /dev/null
    if [ $res != 0 ]; then
        echo "!!!Error: Pull $IMAGE_LOCAL_BUILD failed."
        exit 1
    fi
else
    echo "No need to pull $IMAGE_LOCAL_BUILD"
fi

CHECK_DEV=$(date +"%s")
echo
echo "********************* check $BASE_DEV_REPOSITORY begin *********************"
IMAGE_LOCAL_DEV="$BASE_DEV_REPOSITORY:$BASE_TAG"
docker images | grep -q -E "^$BASE_DEV_REPOSITORY\s+$BASE_TAG\s+"
if [[ $? != 0 || $ALWAYS_PULL == "true" ]]; then
    echo "Need to pull $IMAGE_LOCAL_DEV"
    cd $SCRIPT_DIR
    registry=$REGISTRYNAME ./pull_image.env.sh $IMAGE_LOCAL_DEV
    res=$?
    cd - &> /dev/null
    if [ $res != 0 ]; then
        echo "!!!Error: Pull $IMAGE_LOCAL_DEV failed."
        exit 1
    fi
else
    echo "No need to pull $IMAGE_LOCAL_DEV"
fi

CHECK_STATIC=$(date +"%s")
echo
echo "********************* check $BASE_SERVICE_REPOSITORY begin *********************"
IMAGE_LOCAL_STATIC="$BASE_SERVICE_REPOSITORY:$SERVICE_BASE_TAG"
docker images | grep -q -E "^$BASE_SERVICE_REPOSITORY\s+$SERVICE_BASE_TAG\s+"
if [[ $? != 0 || $ALWAYS_PULL == "true" ]]; then
    echo "Need to pull $IMAGE_LOCAL_STATIC"
    cd $SCRIPT_DIR
    registry=$REGISTRYNAME ./pull_image.env.sh $IMAGE_LOCAL_STATIC
    res=$?
    cd - &> /dev/null
    if [ $res != 0 ]; then
        echo "!!!Error: Pull $IMAGE_LOCAL_STATIC failed."
        exit 1
    fi
else
    echo "No need to pull $IMAGE_LOCAL_STATIC"
fi


FINISH=$(date +"%s")

echo "### Time elapsed ($(($FINISH - $START)) = $(($FINISH - $CHECK_STATIC)) + $(($CHECK_STATIC - $CHECK_DEV)) + $(($CHECK_DEV - $CHECK_BUILD)) + $(($CHECK_BUILD - $START)))s"

exit 0

