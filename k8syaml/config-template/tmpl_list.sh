#!/bin/bash

declare -a CONFIG_FILE_LIST=(
#script
"../../deployment/script/utils/push_image.sh"
"../../deployment/script/utils/pull_image.sh"

#serviceFE
"../serviceFE/vue-element-base.yaml"
"../serviceFE/hub-secret.yaml"
);
