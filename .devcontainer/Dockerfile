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
	pip install e3nn && \
 	pip install -e . 

WORKDIR /home/mambauser
RUN git clone https://github.com/Open-Catalyst-Project/Open-Catalyst-Dataset.git

WORKDIR Open-Catalyst-Dataset
RUN pip install -e .

WORKDIR /home/mambauser
