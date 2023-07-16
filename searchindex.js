Search.setIndex({"docnames": ["NRR/NRR_example", "OCP-introduction", "intro", "ocp-modules/ase-calculator"], "filenames": ["NRR/NRR_example.ipynb", "OCP-introduction.ipynb", "intro.md", "ocp-modules/ase-calculator.rst"], "titles": ["Using OCP to enumerate adsorbates on catalyst surfaces", "Introduction to using OCP in molecular simulations", "Utilizing large, graph-based, pre-trained  machine learned potentials in atomistic simulations", "ASE-compatible calculator for OCP"], "terms": {"In": [0, 1, 2], "previou": 0, "exampl": [0, 1], "we": [0, 1, 2], "construct": [0, 1, 2], "model": [0, 1], "desir": [0, 2], "site": 0, "here": [0, 1], "leverag": [0, 2], "code": [0, 2], "autom": 0, "thi": [0, 1], "rm": 0, "fr": 0, "ocdata": 0, "git": 0, "clone": 0, "http": [0, 1], "github": 0, "com": [0, 1], "open": [0, 1, 2], "project": [0, 2], "dataset": 0, "cd": 0, "pip": 0, "instal": [0, 2], "e": 0, "remot": 0, "object": 0, "1741": 0, "done": [0, 1], "k": [0, 1], "count": 0, "100": [0, 1], "433": 0, "compress": 0, "212": 0, "total": [0, 1], "delta": 0, "260": 0, "reus": 0, "241": 0, "221": 0, "pack": 0, "1308": 0, "receiv": 0, "36": 0, "87": 0, "mib": 0, "13": 0, "40": 0, "s": [0, 1], "resolv": 0, "1081": 0, "file": [0, 2], "home": 0, "jovyan": 0, "share": 0, "scratch": [0, 2], "jkitchin": 0, "tutori": 0, "nrr": 0, "prepar": 0, "metadata": 0, "setup": [0, 2], "py": 0, "25ldone": 0, "25hinstal": 0, "collect": 0, "packag": 0, "develop": [0, 2], "successfulli": 0, "0": [0, 1], "2": [0, 1], "e3nn": 0, "requir": 0, "alreadi": [0, 1], "satisfi": 0, "opt": [0, 1], "conda": 0, "lib": 0, "python3": 0, "9": 0, "5": [0, 1, 2], "1": [0, 1], "sympi": 0, "from": [0, 1, 2], "11": 0, "scipi": 0, "3": [0, 1], "torch": 0, "8": 0, "einsum": 0, "fx": 0, "4": [0, 1, 2], "21": 0, "typing_extens": 0, "numpi": 0, "26": 0, "18": 0, "23": 0, "mpmath": 0, "19": 0, "pypars": 0, "ocpmodel": [0, 1], "common": [0, 1], "ase_util": [0, 1], "import": [0, 1, 2], "ocpcalcul": [0, 1], "ase": [0, 1, 2], "io": 0, "optim": [0, 1, 2], "bfg": [0, 1], "sy": 0, "stat": 0, "linregress": 0, "pickl": 0, "matplotlib": 0, "pyplot": 0, "plt": [0, 1], "core": 0, "adsorbateslabconfig": 0, "bulk": 0, "os": [0, 1], "glob": 0, "panda": 0, "pd": [0, 1], "util": 0, "detecttrajanomali": 0, "option": 0, "see": [0, 1], "below": [0, 1], "np": 0, "hello": 0, "ar": [0, 1, 2], "so": [0, 1], "glad": 0, "you": [0, 1, 2], "could": [0, 1, 2], "join": 0, "learn": 0, "bit": 0, "more": 0, "about": [0, 1, 2], "acceler": [0, 2], "chemic": 0, "simul": 0, "reproduc": [0, 1], "fig": [0, 1], "follow": 0, "zhou": 0, "jing": 0, "et": 0, "al": 0, "enhanc": 0, "catalyt": 0, "activ": 0, "bimetal": 0, "order": 0, "nitrogen": 0, "reduct": 0, "reaction": [0, 1, 2], "perturb": 0, "scale": [0, 2], "relat": [0, 2], "ac": 0, "catalysi": [0, 2], "134": 0, "2023": 0, "2190": 0, "2201": 0, "doi": [0, 1], "org": [0, 1], "10": [0, 1], "1021": [0, 1], "acscat": 0, "2c05877": 0, "To": [0, 1, 2], "do": [0, 1, 2], "them": [0, 2], "find": [0, 2], "lowest": [0, 1], "energi": [0, 2], "assess": 0, "between": [0, 1, 2], "predict": [0, 1, 2], "those": [0, 2], "final": [0, 2], "separ": 0, "favor": 0, "her": 0, "domain": 0, "Be": 0, "sure": [0, 1], "set": [0, 2], "path": [0, 1], "config": [0, 2], "point": [0, 1, 2], "correct": [0, 1], "place": [0, 1], "pass": [0, 2], "an": [0, 1, 2], "argument": 0, "The": [0, 1, 2], "databas": 0, "can": [0, 1, 2], "found": 0, "pkl": 0, "show": [0, 2], "one": [0, 1, 2], "explicitli": 0, "fashion": 0, "breviti": 0, "pathlib": 0, "db": 0, "__file__": 0, "parent": 0, "posixpath": 0, "bulk_src_id": 0, "oqmd": 0, "343039": 0, "adsorbate_smiles_nnh": 0, "n": [0, 1], "nh": 0, "adsorbate_smiles_h": 0, "h": [0, 1], "bulk_src_id_from_db": 0, "bulk_db_path": 0, "nrr_example_bulk": 0, "adsorbate_h": 0, "adsorbate_smiles_from_db": 0, "adsorbate_db_path": 0, "adsorbate_nnh": 0, "from_bulk_get_specific_mil": 0, "specific_mil": 0, "perform": 0, "heurist": 0, "placement": 0, "heuristic_adslab": 0, "mode": 0, "random": 0, "adsorbml": 0, "num_sit": 0, "random_adslab": 0, "random_site_heuristic_plac": 0, "20": 0, "adslab": 0, "atoms_list": 0, "There": [0, 1, 2], "how": [0, 1, 2], "calcul": [0, 2], "within": 0, "ASE": [0, 1, 2], "framework": [0, 2], "By": 0, "write": [0, 1], "lmdb": 0, "main": 0, "repo": 0, "realli": 0, "onli": 0, "adequ": 0, "small": [0, 1], "stuff": 0, "what": [0, 1, 2], "i": 0, "plan": 0, "mani": 0, "should": 0, "definit": 0, "detail": [0, 1, 2], "ha": [0, 2], "been": [0, 2], "provid": [0, 2], "is2r": 0, "instruct": 0, "And": 0, "inform": [0, 1], "onc": 0, "written": 0, "need": [0, 1, 2], "checkpoint": [0, 1], "That": 0, "download": [0, 1, 2], "print": [0, 1], "each": [0, 1, 2], "step": 0, "lot": 0, "just": [0, 1], "demonstr": 0, "happen": 0, "iter": 0, "time": [0, 1], "t0": [0, 1], "checkpoint_path": 0, "escn_l6_m3_lay20_all_md_s2ef": [0, 1], "pt": [0, 1], "makedir": 0, "f": [0, 1], "data": [0, 1, 2], "_": 0, "exist_ok": 0, "true": [0, 1], "defin": 0, "calc": [0, 1], "cpu": [0, 1], "fals": [0, 1], "have": [0, 1, 2], "gpu": 0, "mkdir": 0, "_h": 0, "test": 0, "traj": 0, "fmax": [0, 1], "05": [0, 1], "elaps": [0, 1], "1f": 0, "second": [0, 1, 2], "request": [0, 1], "__init__": 0, "102": 0, "requestsdependencywarn": 0, "urllib3": 0, "chardet": 0, "charset_norm": 0, "12": 0, "doesn": 0, "t": [0, 1], "match": 0, "support": [0, 1], "version": [0, 1], "warn": 0, "amp": 0, "cmd": 0, "checkpoint_dir": 0, "07": 0, "16": 0, "48": 0, "commit": 0, "ab7833d": 0, "identifi": 0, "logs_dir": 0, "log": 0, "tensorboard": 0, "print_everi": 0, "results_dir": 0, "seed": 0, "null": 0, "timestamp_id": 0, "logger": 0, "escn": [0, 1, 2], "model_attribut": 0, "basis_width_scalar": 0, "cutoff": 0, "distance_funct": 0, "gaussian": 0, "hidden_channel": 0, "384": 0, "lmax_list": 0, "6": [0, 1], "max_neighbor": 0, "mmax_list": 0, "num_lay": 0, "num_sphere_sampl": 0, "128": 0, "otf_graph": 0, "regress_forc": 0, "sphere_channel": 0, "160": 0, "use_pbc": 0, "noddp": 0, "batch_siz": 0, "clip_grad_norm": 0, "ema_decai": 0, "999": 0, "energy_coeffici": 0, "eval_batch_s": 0, "eval_everi": 0, "5000": 0, "force_coeffici": 0, "loss_energi": 0, "mae": 0, "loss_forc": 0, "l2mae": 0, "lr_gamma": 0, "lr_initi": 0, "0008": 0, "lr_mileston": 0, "433166": 0, "541460": 0, "649750": 0, "max_epoch": 0, "24": 0, "num_work": 0, "adamw": 0, "optimizer_param": 0, "amsgrad": 0, "warmup_factor": 0, "warmup_step": 0, "slurm": 0, "additional_paramet": 0, "constraint": 0, "volta32gb": 0, "cpus_per_task": 0, "folder": 0, "zitnick": 0, "ocp_log": 0, "4486283": 0, "gpus_per_nod": 0, "job_id": 0, "job_nam": 0, "l6": 0, "m3": 0, "lay20": 0, "md": 0, "mem": 0, "480gb": 0, "node": [0, 2], "ntasks_per_nod": 0, "partit": 0, "4320": 0, "task": 0, "trajectory_lmdb": 0, "descript": 0, "regress": 0, "forc": [0, 2], "dft": [0, 1, 2], "eval_on_free_atom": 0, "grad_input": 0, "atom": [0, 1, 2], "label": [0, 1, 2], "potenti": 0, "metric": 0, "primary_metr": 0, "forces_ma": 0, "relax_opt": 0, "alpha": 0, "70": 0, "damp": 0, "maxstep": 0, "04": 0, "memori": 0, "50": [0, 2], "name": 0, "lbfg": 0, "traj_dir": 0, "traj_id": 0, "relaxation_step": 0, "200": 0, "train_on_free_atom": 0, "type": 0, "write_po": 0, "trainer": 0, "fileexistserror": 0, "traceback": 0, "most": [0, 2], "recent": [0, 2], "call": [0, 2], "last": 0, "input": 0, "7": 0, "cell": [0, 1], "line": [0, 1], "errno": 0, "17": 0, "exist": [0, 1], "343039_h": 0, "principl": 0, "now": 0, "It": [0, 1, 2], "take": [0, 2], "hour": 0, "though": [0, 1], "leav": 0, "later": 0, "exercis": 0, "want": [0, 1, 2], "For": [0, 1], "first": [0, 1, 2], "two": [0, 2], "analysi": 0, "let": 0, "read": 0, "our": 0, "refer": [0, 1], "look": [0, 1], "rb": 0, "load": [0, 1, 2], "materi": [0, 2], "consid": 0, "next": 0, "extract": 0, "src": 0, "id": 0, "bulk_id": 0, "row": 0, "src_id": 0, "establish": 0, "heuristic_adslabs_h": 0, "heuristic_adslabs_nnh": 0, "_nnh": 0, "up": [0, 1], "idx": 0, "logfil": [0, 1], "As": 0, "check": 0, "desorb": 0, "disassoci": 0, "intercal": 0, "chang": 0, "becaus": [0, 1], "effect": [0, 1], "referenc": [0, 1], "scheme": 0, "mai": [0, 1], "erron": 0, "suppli": 0, "well": [0, 2], "necessari": 0, "when": 0, "sp": 0, "rx": 0, "sinc": [0, 1], "don": [0, 1], "ommit": 0, "detector": 0, "instead": 0, "initi": [0, 1], "If": [0, 1], "after": 0, "latter": 0, "over": [0, 2], "min_": 0, "file_out": 0, "ad": [0, 1], "split": 0, "rx_id": 0, "anomol": 0, "get_tag": 0, "anom": 0, "is_adsorbate_dissoci": 0, "is_adsorbate_desorb": 0, "has_surface_chang": 0, "is_adsorbate_intercal": 0, "rx_energi": 0, "get_potential_energi": [0, 1], "append": 0, "relaxation_idx": 0, "relaxed_atom": 0, "relaxed_energy_ml": 0, "df": 0, "datafram": 0, "copi": 0, "reset_index": 0, "min": 0, "tolist": 0, "min_e_ml": 0, "df_h": 0, "df_nnh": 0, "nnh": 0, "df_flat": 0, "merg": 0, "add": [0, 1], "literature_data": 0, "df_all": 0, "ax1": 0, "ax2": 0, "subplot": [0, 1], "sharei": 0, "set_figheight": 0, "15": [0, 2], "x": [0, 1], "min_e_ml_x": 0, "y": [0, 1], "e_lit_h": 0, "set_titl": 0, "linewidth": 0, "slope": 0, "intercept": 0, "r": [0, 1], "p": 0, "se": 0, "legend": [0, 1], "2f": 0, "sq": 0, "loc": 0, "upper": 0, "left": 0, "scatter": 0, "axi": 0, "squar": 0, "set_xlim": 0, "set_ylim": 0, "set_xlabel": 0, "de": 0, "ev": [0, 1], "set_ylabel": 0, "min_e_ml_i": 0, "e_lit_nnh": 0, "set_figwidth": 0, "comp": 0, "composit": [0, 2], "c": [0, 1], "txt": 0, "annot": 0, "b": [0, 1], "introduc": [1, 2], "start": [1, 2], "simpl": [1, 2], "adsorb": [1, 2], "where": [1, 2], "specifi": 1, "conceptu": 1, "like": 1, "would": 1, "densiti": [1, 2], "function": [1, 2], "theori": [1, 2], "creat": 1, "slab": 1, "surfac": 1, "guess": 1, "run": [1, 2], "relax": [1, 2], "get": 1, "geometri": [1, 2], "comput": [1, 2], "state": [1, 2], "care": 1, "some": [1, 2], "combin": 1, "return": 1, "directli": 1, "know": 1, "which": [1, 2], "differ": [1, 2], "than": 1, "might": 1, "oxygen": 1, "convention": 1, "o2": 1, "o": 1, "co": 1, "z": 1, "h2": 1, "h2o": 1, "w": 1, "n2": 1, "cxhyoznw": 1, "end": 1, "altern": 1, "possibl": [1, 2], "through": 1, "thermodynam": 1, "cycl": 1, "other": [1, 2], "rh1": 1, "rh2": 1, "re1": 1, "03": 1, "re2": 1, "direct": 1, "Then": [1, 2], "2o2": 1, "base": 1, "atct": 1, "anl": 1, "gov": 1, "thermochem": 1, "118": 1, "speci": 1, "species_numb": 1, "986": 1, "format": 1, "water": 1, "standard": 1, "also": [1, 2], "current": [1, 2], "art": [1, 2], "url": 1, "dl": 1, "fbaipublicfil": 1, "opencatalystproject": 1, "2023_03": 1, "s2ef": 1, "wb": 1, "content": 1, "output": [1, 2], "somewhat": 1, "verbos": 1, "debug": 1, "purpos": [1, 2], "expandus": 1, "build": [1, 2], "modul": 1, "experiment": 1, "lattic": 1, "constant": 1, "default": 1, "error": 1, "few": [1, 2], "percent": 1, "constrain": 1, "ani": 1, "layer": 1, "fcc111": 1, "add_adsorb": 1, "size": [1, 2], "vacuum": 1, "height": 1, "posit": 1, "fcc": 1, "set_calcul": 1, "slab_": 1, "good": 1, "practic": [1, 2], "your": [1, 2], "make": [1, 2], "thei": [1, 2], "expect": 1, "visual": 1, "plot": 1, "plot_atom": 1, "ax": 1, "rotat": [1, 2], "90x": 1, "set_axis_off": 1, "did": 1, "paper": 1, "111": 1, "264": 1, "convert": 1, "dissoci": 1, "d": 1, "58": 1, "expt": 1, "compar": 1, "68": 1, "account": 1, "biggest": 1, "due": 1, "exchang": 1, "pbe": 1, "wa": [1, 2], "train": 1, "rpbe": 1, "addit": 1, "includ": [1, 2], "experi": [1, 2], "These": [1, 2], "tend": 1, "systemat": 1, "calibr": 1, "especi": 1, "augment": 1, "own": [1, 2], "explor": [1, 2], "try": 1, "bridg": 1, "top": 1, "inspect": 1, "result": 1, "xu": 1, "kitchin": 1, "j": 1, "2014": 1, "probe": 1, "configur": [1, 2], "late": 1, "transit": 1, "metal": 1, "phy": 1, "chem": 1, "44": 1, "25597": 1, "25602": 1, "dx": 1, "jp508805h": 1, "work": [1, 2], "number": [1, 2], "re3": 1, "store": [1, 2], "structur": [1, 2], "subtl": 1, "stoichiometri": 1, "normal": 1, "25": 1, "ml": 1, "json": 1, "edata": 1, "si": 1, "sfcc": 1, "symbol": 1, "po": 1, "pbc": 1, "nO": 1, "portion": 1, "figur": 1, "hcp": 1, "across": 1, "highli": 1, "similar": 1, "At": 1, "higher": 1, "agreement": 1, "extrapol": 1, "fine": [1, 2], "tune": [1, 2], "tqdm": 1, "refdata": 1, "cu": 1, "ag": 1, "rh": 1, "ir": 1, "entri": 1, "none": 1, "suppress": 1, "xlabel": 1, "ref": 1, "ylabel": 1, "same": 1, "trend": 1, "fall": 1, "pariti": 1, "littl": 1, "weaker": 1, "bind": 1, "h_": 1, "deviat": 1, "rel": 1, "better": 1, "1m": 2, "us": 2, "wide": 2, "arrai": 2, "applic": 2, "rang": 2, "properti": 2, "new": 2, "specif": 2, "workshop": 2, "focu": 2, "catalyst": 2, "ocp": 2, "showcas": 2, "sever": 2, "varieti": 2, "explain": 2, "environ": 2, "typic": 2, "adsorpt": 2, "discuss": 2, "limit": 2, "opportun": 2, "futur": 2, "research": 2, "particip": 2, "laptop": 2, "internet": 2, "capabl": 2, "A": 2, "access": 2, "via": 2, "mainstai": 2, "molecular": 2, "its": 2, "high": 2, "cost": 2, "past": 2, "decad": 2, "increasingli": 2, "surrog": 2, "supplement": 2, "mlp": 2, "earli": 2, "dai": 2, "neural": 2, "network": 2, "were": 2, "cartesian": 2, "coordin": 2, "system": 2, "featur": 2, "success": 2, "lack": 2, "physic": 2, "notabl": 2, "invari": 2, "translat": 2, "permut": 2, "extens": 2, "being": 2, "investig": 2, "year": 2, "ago": 2, "symmetri": 2, "intens": 2, "had": 2, "enabl": 2, "substanti": 2, "progress": 2, "vector": 2, "quadrat": 2, "element": 2, "usual": 2, "implicit": 2, "transferr": 2, "hand": 2, "craft": 2, "adapt": 2, "thu": 2, "judgement": 2, "select": 2, "while": 2, "progess": 2, "made": 2, "mitig": 2, "approach": 2, "overtaken": 2, "method": 2, "todai": 2, "convolut": 2, "gener": 2, "repres": 2, "edg": 2, "connect": 2, "roughli": 2, "interact": 2, "bond": 2, "learnabl": 2, "oper": 2, "pair": 2, "triplet": 2, "quadruplet": 2, "messag": 2, "central": 2, "accumul": 2, "all": 2, "studi": 2, "handl": 2, "kind": 2, "began": 2, "appear": 2, "regularli": 2, "literatur": 2, "around": 2, "2016": 2, "consist": 2, "three": 2, "thing": 2, "umbrella": 2, "architectur": 2, "associ": 2, "cgcnn": 2, "arxiv": 2, "schnet": 2, "dimenet": 2, "forcenet": 2, "spinconv": 2, "gemnet": 2, "dt": 2, "painn": 2, "parallel": 2, "oc": 2, "scn": 2, "correspond": 2, "bader": 2, "charg": 2, "choos": 2, "script": 2, "shell": 2, "compat": 2, "abov": 2, "jupyt": 2, "notebook": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"us": [0, 1], "ocp": [0, 1, 3], "enumer": 0, "adsorb": 0, "catalyst": 0, "surfac": 0, "introduct": [0, 1, 2], "slab": 0, "configur": 0, "run": 0, "relax": 0, "ml": 0, "all": 0, "system": 0, "pars": 0, "trajectori": 0, "post": 0, "process": 0, "make": 0, "pariti": 0, "plot": 0, "valu": 0, "obtain": 0, "v": 0, "report": 0, "paper": 0, "figur": 0, "6b": 0, "compar": 0, "literatur": 0, "result": 0, "molecular": 1, "simul": [1, 2], "calcul": [1, 3], "adsorpt": 1, "energi": 1, "exercis": 1, "coverag": 1, "depend": 1, "site": 1, "correl": 1, "next": 1, "step": 1, "util": 2, "larg": 2, "graph": 2, "base": 2, "pre": 2, "train": 2, "machin": 2, "learn": 2, "potenti": 2, "atomist": 2, "abstract": 2, "model": 2, "dataset": 2, "task": 2, "checkpoint": 2, "goal": 2, "thi": 2, "tutori": 2, "ASE": 3, "compat": 3}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})