Utilizing large, graph-based, pre-trained  machine learned potentials in atomistic simulations 
----------

# Abstract

The most recent, state of the art machine learned potentials in atomistic simulations are based on graph models that are trained on large (1M+) datasets. These models can be downloaded and used in a wide array of applications ranging from catalysis to materials properties. These pre-trained models can be used on their own, to accelerate DFT calculation, and they can also be used as a starting point to fine-tune new models for specific tasks. In this workshop we will focus on large, graph-based, pre-trained  machine learned models from the Open Catalyst Project (OCP) to showcase how they can be used for these purposes. OCP provides several pre-trained models for a variety of tasks related to atomistic simulations. We will explain what these models are, how they differ, and details of the datasets they are trained from.  We will introduce an Atomic Simulation Environment (ase) calculator that leverages an OCP pre-trained model for typical simulation tasks including adsorbate geometry relaxation, adsorption energy calculations, and reaction energies. We will show how pre-trained models can be fine-tuned on new data sets for new tasks. We will also discuss current limitations of the models and opportunities for future research. Participants will need a laptop with internet capability. A computational environment accessible via the internet will be provided.

# Introduction

Density functional theory (DFT) has been a mainstay in molecular simulation, but its high computational cost limits the number and size of simulations that are practical. Over the past two decades machine learning has increasingly been used to build surrogate models to supplement DFT. We call these models machine learned potentials (MLP) In the early days, neural networks were trained using the cartesian coordinates of atomistic systems as features with some success. These features lack important physical properties, notably they lack invariance to rotations, translations and permutations, and they are extensive features, which limit them to the specific system being investigated. About 15 years ago, a new set of features called symmetry functions were developed that were intensive, and which had these invariances. These functions enabled substantial progress in MLP, but they had a few important limitations. First, the size of the feature vector scaled quadratically with the number of elements, practically limiting the MLP to 4-5 elements. Second, composition was usually implicit in the functions, which limited the transferrability of the MLP to new systems. Finally, these functions were "hand-crafted", with limited or no adaptability to the systems being explored, thus one needed to use judgement and experience to select them. While progess has been made in mitigating these limitations, a new approach has overtaken these methods.

Today, the state of the art in machine learned potentials uses graph convolutions to generate the feature vectors. In this approach, atomistic systems are represented as graphs where each node is an atom, and the edges connect the nodes (atoms) and roughly represent interactions or bonds between atoms. Then, there are machine learnable convolution functions that operate on the graph to generate feature vectors. These operators can work on pairs, triplets and quadruplets of nodes to compute "messages" that are passed to the central node (atom) and accumulated into the feature vector. This feature generate method can be constructed with all the desired invariances, the functions are machine learnable, and adapt to the systems being studied, and it scales well to high numbers of elements (the current models handle 50+ elements). These kind of MLPs began appearing regularly in the literature around 2016.

Today an MLP consists of three things:

1. A model that takes an atomistic system, generates features and relates those features to some output.
2. A dataset that provides the atomistic systems and the desired output labels. This label could be energy, forces, or other atomistic properties.
3. A checkpoint that stores the trained model for use in predictions.

The [Open Catalyst Project (OCP)](https://github.com/Open-Catalyst-Project) is an umbrella for these machine learned potential models, data sets, and checkpoints from training. 

## Models

OCP provides several [models](https://github.com/Open-Catalyst-Project/ocp/blob/main/MODELS.md). Each model represents a different approach to featurization, and a different machine learning architecture. The models can be used for different tasks, and you will find different checkpoints associated with different datasets and tasks. 

- CGCNN [[`arXiv`](https://arxiv.org/abs/1710.10324)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/blob/main/ocpmodels/models/cgcnn.py)]
- SchNet [[`arXiv`](https://arxiv.org/abs/1706.08566)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/blob/main/ocpmodels/models/schnet.py)]
- DimeNet [[`arXiv`](https://arxiv.org/abs/2003.03123)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/blob/main/ocpmodels/models/dimenet.py)]
- ForceNet [[`arXiv`](https://arxiv.org/abs/2103.01436)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/blob/main/ocpmodels/models/forcenet.py)]
- DimeNet++ [[`arXiv`](https://arxiv.org/abs/2011.14115)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/blob/main/ocpmodels/models/dimenet_plus_plus.py)]
- SpinConv [[`arXiv`](https://arxiv.org/abs/2106.09575)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/blob/main/ocpmodels/models/spinconv.py)]
- GemNet-dT [[`arXiv`](https://arxiv.org/abs/2106.08903)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/tree/main/ocpmodels/models/gemnet)]
- PaiNN [[`arXiv`](https://arxiv.org/abs/2102.03150)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/tree/main/ocpmodels/models/painn)]
- Graph Parallelism [[`arXiv`](https://arxiv.org/abs/2203.09697)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/tree/main/ocpmodels/models/gemnet_gp)]
- GemNet-OC [[`arXiv`](https://arxiv.org/abs/2204.02782)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/tree/main/ocpmodels/models/gemnet_oc)]
- SCN [[`arXiv`](https://arxiv.org/abs/2206.14331)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/tree/main/ocpmodels/models/scn)]
- eSCN [[`arXiv`](https://arxiv.org/abs/2302.03655)] [[`code`](https://github.com/Open-Catalyst-Project/ocp/tree/main/ocpmodels/models/escn)]

## Datasets / Tasks

OCP provides several different [datasets](https://github.com/Open-Catalyst-Project/ocp/blob/main/DATASET.md) that correspond to different tasks that range from predicting energy and forces from structures to Bader charges, relaxation energies, and others.

## Checkpoints

To use a pre-trained model you need to have [ocp](https://github.com/Open-Catalyst-Project/ocp) installed. Then you need to choose a checkpoint and config file which will be loaded to configure OCP for the predictions you want to make. There are two approaches to running OCP, via scripts in a shell, or using an ASE compatible calculator.

It is possible to use the OCP framework to [train](https://github.com/Open-Catalyst-Project/ocp/blob/main/TRAIN.md) on your own data using one of the models above. It is possible to do this from scratch, or using the pre-trained models as a starting point.


# Goals for this tutorial

This tutorial will start by using OCP in a Jupyter notebook to setup some simple calculations that use OCP to compute energy and forces, for structure optimization
