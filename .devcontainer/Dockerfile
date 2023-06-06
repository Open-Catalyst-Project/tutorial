FROM mambaorg/micromamba
USER root
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
	&& apt-get -qq install g++ git wget unzip \
	&& apt-get -y clean \
	&& rm -rf /var/lib/apt/lists/*

USER $MAMBA_USER
WORKDIR /home/mambauser

RUN git clone https://github.com/Open-Catalyst-Project/ocp.git 
WORKDIR ocp

RUN micromamba install -n base -c defaults -c conda-forge python=3.9.* pip 
ARG MAMBA_DOCKERFILE_ACTIVATE=1

RUN pip install conda-merge 
RUN	conda-merge env.common.yml env.cpu.yml > env.yml &&\
	micromamba install -n base -f env.yml && \
	micromamba install -n base -c conda-forge jupyterlab jupyter-book && \
 	micromamba clean --all --yes && \
 	pip install -e .

WORKDIR /home/mambauser
RUN wget -q -nc https://dl.fbaipublicfiles.com/opencatalystproject/models/2022_09/oc22/s2ef/gnoc_oc22_oc20_all_s2ef.pt &&\
    wget -q -nc https://dl.fbaipublicfiles.com/opencatalystproject/models/2021_08/s2ef/gemnet_t_direct_h512_all.pt

ENV OCP_S2EF=/home/mambauser/gnoc_oc22_oc20_all_s2ef.pt