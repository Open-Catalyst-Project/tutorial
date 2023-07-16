# ocp-tutorial

This tutorial was designed for an ACS workshop at the Fall ACS meeting in San Francisco on August 16, 2023. It will be a work in progress until then.

## Usage

### Fall ACS 2023

We are providing a Jupyter Lab environment with GPU support for the Fall ACS  2023 workshop. Instructions for access will be provided at the Workshop.

### In GitHUB Codespaces

This repo provide a Codespace for running OCP. One checkpoint is available at /home/mambauser/gnoc_oc22_oc20_all_s2ef.pt. This is also in the env var $OCP_S2EF.

Launch jupyter lab like this:

jupyter lab --ServerApp.ip="" --ServerApp.allow_origin=""

in the VS Code terminal. Then you can click on the link in the terminal to open it in a new tab. It is also possible to run the examples in the VSCode browser tool.

A limitation of this is Codespaces does not currently provide GPUs.

## Contributors

We welcome and recognize all contributions. You can see a list of current contributors in the [contributors tab](https://github.com/Open-Catalyst-Project/tutorial/graphs/contributors).

## Credits

This project is created using the excellent open source [Jupyter Book project](https://jupyterbook.org/) and the [executablebooks/cookiecutter-jupyter-book template](https://github.com/executablebooks/cookiecutter-jupyter-book).
