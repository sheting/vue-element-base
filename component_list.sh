#!/bin/bash


#build para
# component name, define image name(unique key)
declare -a Component=(
'fe-vue-element-base'
);

# code path
declare -a Path=(
'code'
);

declare -a Project_Type=(
'vue'
);

# port in container
declare -a Port=(
'80'
);

# port for docker run
declare -a Docker_Port=(
'31013'
);

#k8s para
declare -a Yaml_Path=(
"k8syaml/serviceFE"
);

# k8s yaml file
declare -a Yaml_Name=(
"vue-element-base.yaml"
);

