Search.setIndex({"docnames": ["NRR/NRR_example", "OCP-introduction", "intro", "ocp-modules/ase-calculator"], "filenames": ["NRR/NRR_example.ipynb", "OCP-introduction.ipynb", "intro.md", "ocp-modules/ase-calculator.rst"], "titles": ["Using OCP to enumerate adsorbates on catalyst surfaces", "Introduction to using OCP in molecular simulations", "Utilizing large, graph-based, pre-trained  machine learned potentials in atomistic simulations", "ASE-compatible calculator for OCP"], "terms": {"In": [0, 1, 2], "previou": 0, "we": [0, 1, 2], "construct": [0, 1, 2], "model": [0, 1], "desir": [0, 2], "site": 0, "here": [0, 1], "leverag": [0, 1, 2], "code": [0, 2], "autom": [0, 1], "rm": 0, "fr": 0, "ocdata": 0, "git": 0, "clone": 0, "http": [0, 1], "github": 0, "com": [0, 1], "open": [0, 1, 2], "project": [0, 2], "dataset": [0, 1], "cd": 0, "pip": 0, "instal": [0, 2], "e": 0, "remot": 0, "object": 0, "1741": 0, "done": [0, 1], "k": [0, 1], "count": 0, "100": [0, 1], "433": 0, "compress": 0, "212": 0, "total": [0, 1], "delta": 0, "260": 0, "reus": 0, "241": 0, "221": 0, "pack": 0, "1308": [0, 1], "receiv": 0, "36": 0, "87": 0, "mib": 0, "1": [0, 1], "37": 0, "s": [0, 1], "resolv": 0, "1081": 0, "updat": [0, 1], "file": [0, 2], "47": [0, 1], "home": [0, 1], "mambaus": [0, 1], "tutori": [0, 1], "nrr": 0, "prepar": 0, "metadata": 0, "setup": [0, 2], "py": [0, 1], "25ldone": 0, "25hinstal": 0, "collect": 0, "packag": [0, 1], "develop": [0, 2], "successfulli": 0, "0": [0, 1], "2": [0, 1], "e3nn": 0, "requir": 0, "alreadi": [0, 1], "satisfi": 0, "opt": [0, 1], "conda": [0, 1], "lib": [0, 1], "python3": [0, 1], "9": [0, 1], "5": [0, 1, 2], "sympi": 0, "from": [0, 1, 2], "12": [0, 1], "scipi": 0, "11": 0, "torch": 0, "8": [0, 1], "13": [0, 1], "einsum": 0, "fx": 0, "4": [0, 1, 2], "3": [0, 1], "23": 0, "typing_extens": 0, "7": [0, 1], "numpi": 0, "28": 0, "21": [0, 1], "6": [0, 1], "24": [0, 1], "mpmath": 0, "19": [0, 1], "ocpmodel": [0, 1], "common": [0, 1], "ase_util": [0, 1], "import": [0, 1, 2], "ocpcalcul": [0, 1], "ase": [0, 1, 2], "io": [0, 1], "optim": [0, 1, 2], "bfg": [0, 1], "sy": 0, "stat": 0, "linregress": 0, "pickl": 0, "matplotlib": [0, 1], "pyplot": [0, 1], "plt": [0, 1], "time": [0, 1], "core": 0, "adsorbateslabconfig": 0, "bulk": 0, "os": [0, 1], "glob": 0, "panda": 0, "pd": [0, 1], "util": 0, "detecttrajanomali": 0, "option": 0, "see": [0, 1], "below": [0, 1], "np": 0, "tqdm": [0, 1], "auto": [0, 1], "tqdmwarn": [0, 1], "iprogress": [0, 1], "found": [0, 1], "pleas": [0, 1], "jupyt": [0, 1, 2], "ipywidget": [0, 1], "readthedoc": [0, 1], "en": [0, 1], "stabl": [0, 1], "user_instal": [0, 1], "html": [0, 1], "autonotebook": [0, 1], "notebook_tqdm": [0, 1], "build": [0, 1, 2], "font": 0, "cach": 0, "mai": [0, 1], "take": [0, 2], "moment": 0, "hello": 0, "ar": [0, 1, 2], "so": [0, 1], "glad": 0, "you": [0, 1, 2], "could": [0, 1, 2], "join": 0, "learn": 0, "bit": 0, "more": [0, 1], "about": [0, 1, 2], "acceler": [0, 2], "chemic": 0, "simul": 0, "reproduc": [0, 1], "fig": [0, 1], "follow": 0, "zhou": 0, "jing": 0, "et": 0, "al": 0, "enhanc": 0, "catalyt": 0, "activ": 0, "bimetal": 0, "order": 0, "nitrogen": [0, 1], "reduct": [0, 1], "reaction": [0, 1, 2], "perturb": 0, "scale": [0, 2], "relat": [0, 2], "ac": 0, "catalysi": [0, 2], "134": 0, "2023": [0, 1], "2190": 0, "2201": 0, "doi": [0, 1], "org": [0, 1], "10": [0, 1], "1021": [0, 1], "acscat": 0, "2c05877": 0, "To": [0, 1, 2], "do": [0, 1, 2], "them": [0, 2], "find": [0, 2], "lowest": [0, 1], "energi": [0, 2], "assess": 0, "between": [0, 1, 2], "predict": [0, 1, 2], "those": [0, 2], "final": [0, 2], "separ": 0, "favor": 0, "her": 0, "domain": 0, "Be": 0, "sure": [0, 1], "set": [0, 2], "path": [0, 1], "config": [0, 2], "point": [0, 1, 2], "correct": [0, 1], "place": [0, 1], "pass": [0, 2], "argument": 0, "The": [0, 1, 2], "databas": 0, "can": [0, 1, 2], "pkl": 0, "show": [0, 2], "one": [0, 1, 2], "explicitli": 0, "fashion": 0, "breviti": 0, "pathlib": 0, "db": 0, "__file__": 0, "parent": 0, "posixpath": 0, "load": [0, 1, 2], "id": 0, "creat": [0, 1], "refer": [0, 1], "structur": [0, 1, 2], "gener": [0, 2], "want": [0, 1, 2], "comput": [0, 1, 2], "bulk_src_id": 0, "oqmd": 0, "343039": 0, "adsorbate_smiles_nnh": 0, "n": [0, 1], "nh": 0, "adsorbate_smiles_h": 0, "h": [0, 1], "bulk_src_id_from_db": 0, "bulk_db_path": 0, "nrr_example_bulk": 0, "adsorbate_h": 0, "adsorbate_smiles_from_db": 0, "adsorbate_db_path": 0, "adsorbate_nnh": 0, "from_bulk_get_specific_mil": 0, "specific_mil": 0, "ag36pd12": 0, "1666666666666667": 0, "true": [0, 1], "now": 0, "need": [0, 1, 2], "potenti": [0, 1], "placement": 0, "two": [0, 2], "kind": [0, 2], "guess": [0, 1], "heurist": 0, "random": 0, "approach": [0, 2], "cell": [0, 1], "adsorpt": [0, 2], "geometri": [0, 1, 2], "perform": 0, "heuristic_adslab": 0, "mode": 0, "adsorbml": 0, "num_sit": 0, "random_adslab": 0, "random_site_heuristic_plac": 0, "adslab": 0, "atoms_list": 0, "len": 0, "let": 0, "what": [0, 1, 2], "look": [0, 1], "It": [0, 1, 2], "littl": [0, 1], "tricki": 0, "tini": 0, "atom": [0, 1, 2], "some": [0, 1, 2], "inspect": [0, 1], "ontop": 0, "bridg": [0, 1], "hollow": 0, "differ": [0, 1, 2], "exhaust": 0, "search": [0, 1], "increas": 0, "number": [0, 1, 2], "check": 0, "possibl": [0, 1, 2], "main": 0, "idea": 0, "probabl": 0, "most": [0, 1, 2], "relev": 0, "visual": [0, 1], "plot_atom": [0, 1], "ax": [0, 1], "subplot": [0, 1], "i": 0, "set_axis_off": [0, 1], "rang": [0, 2], "16": [0, 1], "tight_layout": 0, "There": [0, 1, 2], "how": [0, 1, 2], "calcul": [0, 2], "within": 0, "ASE": [0, 1, 2], "framework": [0, 2], "By": 0, "write": [0, 1], "lmdb": 0, "repo": 0, "realli": 0, "onli": 0, "adequ": 0, "small": [0, 1], "stuff": 0, "plan": 0, "mani": 0, "should": 0, "definit": 0, "detail": [0, 1, 2], "ha": [0, 2], "been": [0, 2], "provid": [0, 2], "is2r": 0, "instruct": 0, "And": 0, "inform": [0, 1], "onc": 0, "written": 0, "checkpoint": [0, 1], "That": 0, "download": [0, 1, 2], "print": [0, 1], "each": [0, 1, 2], "step": 0, "just": [0, 1], "demonstr": 0, "happen": 0, "iter": 0, "checkpoint_path": 0, "escn_l6_m3_lay20_all_md_s2ef": [0, 1], "pt": [0, 1], "makedir": 0, "f": [0, 1], "data": [0, 1, 2], "_": 0, "exist_ok": 0, "defin": 0, "calc": [0, 1], "cpu": [0, 1], "fals": [0, 1], "have": [0, 1, 2], "gpu": [0, 1], "amp": [0, 1], "cmd": [0, 1], "checkpoint_dir": [0, 1], "07": [0, 1], "04": [0, 1], "commit": [0, 1], "ab7833d": [0, 1], "identifi": [0, 1], "logs_dir": [0, 1], "log": [0, 1], "tensorboard": [0, 1], "print_everi": [0, 1], "results_dir": [0, 1], "seed": [0, 1], "null": [0, 1], "timestamp_id": [0, 1], "logger": [0, 1], "escn": [0, 1, 2], "model_attribut": [0, 1], "basis_width_scalar": [0, 1], "cutoff": [0, 1], "distance_funct": [0, 1], "gaussian": [0, 1], "hidden_channel": [0, 1], "384": [0, 1], "lmax_list": [0, 1], "max_neighbor": [0, 1], "20": [0, 1], "mmax_list": [0, 1], "num_lay": [0, 1], "num_sphere_sampl": [0, 1], "128": [0, 1], "otf_graph": [0, 1], "regress_forc": [0, 1], "sphere_channel": [0, 1], "160": [0, 1], "use_pbc": [0, 1], "noddp": [0, 1], "batch_siz": [0, 1], "clip_grad_norm": [0, 1], "ema_decai": [0, 1], "999": [0, 1], "energy_coeffici": [0, 1], "eval_batch_s": [0, 1], "eval_everi": [0, 1], "5000": [0, 1], "force_coeffici": [0, 1], "loss_energi": [0, 1], "mae": [0, 1], "loss_forc": [0, 1], "l2mae": [0, 1], "lr_gamma": [0, 1], "lr_initi": [0, 1], "0008": [0, 1], "lr_mileston": [0, 1], "433166": [0, 1], "541460": [0, 1], "649750": [0, 1], "max_epoch": [0, 1], "num_work": [0, 1], "adamw": [0, 1], "optimizer_param": [0, 1], "amsgrad": [0, 1], "warmup_factor": [0, 1], "warmup_step": [0, 1], "slurm": [0, 1], "additional_paramet": [0, 1], "constraint": [0, 1], "volta32gb": [0, 1], "cpus_per_task": [0, 1], "folder": [0, 1], "zitnick": [0, 1], "ocp_log": [0, 1], "4486283": [0, 1], "gpus_per_nod": [0, 1], "job_id": [0, 1], "job_nam": [0, 1], "l6": [0, 1], "m3": [0, 1], "lay20": [0, 1], "md": [0, 1], "mem": [0, 1], "480gb": [0, 1], "node": [0, 1, 2], "ntasks_per_nod": [0, 1], "partit": [0, 1], "4320": [0, 1], "task": [0, 1], "trajectory_lmdb": [0, 1], "descript": [0, 1], "regress": [0, 1], "forc": [0, 1, 2], "dft": [0, 1, 2], "eval_on_free_atom": [0, 1], "grad_input": [0, 1], "label": [0, 1, 2], "metric": [0, 1], "primary_metr": [0, 1], "forces_ma": [0, 1], "relax_opt": [0, 1], "alpha": [0, 1], "70": [0, 1], "damp": [0, 1], "maxstep": [0, 1], "50": [0, 1, 2], "name": [0, 1], "lbfg": [0, 1], "traj_dir": [0, 1], "traj_id": [0, 1], "relaxation_step": [0, 1], "200": [0, 1], "train_on_free_atom": [0, 1], "type": [0, 1], "write_po": [0, 1], "trainer": [0, 1], "t0": [0, 1], "_h": 0, "test": 0, "traj": 0, "fmax": [0, 1], "05": [0, 1], "elaps": [0, 1], "1f": 0, "second": [0, 1, 2], "00": [0, 1], "030167": 0, "2075": 0, "06": [0, 1], "986077": 0, "0974": 0, "970674": 0, "8434": 0, "863732": 0, "3464": 0, "25": [0, 1], "857940": 0, "2209": 0, "30": 0, "856972": 0, "3383": 0, "848904": 0, "4230": 0, "42": [0, 1], "830491": 0, "3519": 0, "825890": 0, "1785": 0, "53": 0, "821260": 0, "1372": 0, "59": 0, "818889": 0, "1592": 0, "14": [0, 1], "812978": 0, "2002": 0, "806631": 0, "2738": 0, "801583": 0, "3260": 0, "791289": 0, "3024": 0, "15": [0, 1, 2], "27": 0, "769616": 0, "2470": 0, "32": 0, "755130": 0, "3948": 0, "17": [0, 1], "38": [0, 1], "723716": 0, "5337": 0, "18": 0, "44": [0, 1], "653325": 0, "6335": 0, "565822": 0, "6483": 0, "56": [0, 1], "476601": 0, "5957": 0, "01": 0, "411204": 0, "6125": 0, "22": [0, 1], "08": [0, 1], "388851": 0, "4670": 0, "363892": 0, "3224": 0, "352147": 0, "3982": 0, "346200": 0, "3968": 0, "26": [0, 1], "334573": 0, "3370": 0, "35": 0, "317498": 0, "2394": 0, "40": [0, 1], "298247": 0, "2253": 0, "29": [0, 1], "46": [0, 1], "288395": 0, "2006": 0, "51": 0, "284532": 0, "1768": 0, "31": [0, 1], "57": 0, "278942": 0, "1507": 0, "02": 0, "278030": 0, "0944": 0, "33": 0, "278676": 0, "0710": 0, "34": [0, 1], "275950": 0, "0549": 0, "277190": 0, "0421": 0, "219": 0, "principl": 0, "hour": 0, "though": [0, 1], "leav": 0, "later": 0, "exercis": 0, "For": [0, 1], "first": [0, 1, 2], "analysi": 0, "read": 0, "our": 0, "rb": 0, "symbol": [0, 1], "cupd3": 0, "pbc": [0, 1], "91276645": 0, "singlepointdftcalcul": 0, "src_id": 0, "349719": 0, "pd3ag": 0, "02885979": 0, "345911": 0, "scpd3": 0, "04684963": 0, "initial_charg": 0, "initial_magmom": 0, "momenta": 0, "tag": 0, "singlepointcalcul": 0, "mp": 0, "2677": 0, "mo3pd": 0, "96898192": 0, "1186014": 0, "ag3pd": 0, "14093081": 0, "348629": 0, "ag3cu": 0, "09439099": 0, "343006": 0, "ag3mo": 0, "1665424": 0, "349813": 0, "agcu3": 0, "82618693": 0, "347528": 0, "cu3ru": 0, "72399424": 0, "344251": 0, "pdta3": 0, "13568646": 0, "343394": 0, "agmo3": 0, "00594441": 0, "344635": 0, "mo3ru": 0, "95617571": 0, "344237": 0, "mopd3": 0, "96059535": 0, "346818": 0, "pd3ru": 0, "93112559": 0, "349496": 0, "pd3ta": 0, "9907085": 0, "343615": 0, "moru3": 0, "85915122": 0, "348366": 0, "agta3": 0, "1730103": 0, "345352": 0, "auhf3": 0, "36653536": 0, "346653": 0, "aghf3": 0, "39618436": 0, "materi": [0, 2], "consid": [0, 1], "next": 0, "extract": 0, "src": 0, "bulk_id": 0, "row": 0, "theori": [0, 1, 2], "would": [0, 1], "These": [0, 1, 2], "embarrassingli": 0, "parallel": [0, 2], "launch": 0, "wai": 0, "speed": 0, "thing": [0, 2], "up": [0, 1], "watch": 0, "don": [0, 1], "t": [0, 1], "exce": 0, "avail": 0, "ram": 0, "which": [0, 1, 2], "caus": 0, "kernel": 0, "crash": 0, "stop": 0, "32gb": 0, "joblib": 0, "delai": 0, "def": 0, "relax_slab": 0, "arg": 0, "idx": 0, "logfil": [0, 1], "establish": 0, "heuristic_adslabs_h": 0, "heuristic_adslabs_nnh": 0, "_nnh": 0, "nnh": 0, "n_job": 0, "keyboardinterrupt": 0, "traceback": 0, "recent": [0, 2], "call": [0, 2], "last": 0, "line": [0, 1], "1944": 0, "__call__": 0, "self": 0, "1938": 0, "item": 0, "output": [0, 1, 2], "blank": 0, "interpret": 0, "1939": 0, "progress": [0, 2], "until": 0, "enter": 0, "try": [0, 1], "except": 0, "block": 0, "1940": 0, "reach": 0, "yield": 0, "statement": 0, "start": [0, 1, 2], "aynchron": 0, "1941": 0, "dispatch": 0, "worker": 0, "1942": 0, "return": [0, 1], "return_gener": 0, "els": 0, "list": 0, "1587": 0, "_get_output": 0, "pre_dispatch": 0, "1584": 0, "1586": 0, "_backend": 0, "retrieval_context": 0, "_retriev": 0, "1589": 0, "generatorexit": 0, "1590": 0, "garbag": 0, "befor": 0, "being": [0, 2], "fulli": 0, "1591": 0, "consum": 0, "abort": 0, "remain": 0, "warn": 0, "user": 0, "necessari": 0, "1593": 0, "_except": 0, "1699": 0, "1694": 0, "If": [0, 1], "job": 0, "readi": 0, "retriev": 0, "yet": 0, "wait": 0, "1695": 0, "async": 0, "callback": 0, "1696": 0, "_job": 0, "1697": 0, "get_statu": 0, "1698": 0, "timeout": 0, "task_pend": 0, "sleep": 0, "1700": 0, "continu": 0, "1702": 0, "care": [0, 1], "fill": 0, "1703": 0, "empti": 0, "python": 0, "thread": 0, "safe": 0, "1704": 0, "default": [0, 1], "henc": 0, "lock": 0, "goal": 0, "candid": 0, "save": 0, "analyz": 0, "quit": 0, "least": 0, "16gb": 0, "345911_h": 0, "As": 0, "desorb": 0, "disassoci": 0, "intercal": 0, "chang": 0, "becaus": [0, 1], "thei": [0, 1, 2], "affect": 0, "referenc": [0, 1], "scheme": 0, "mean": 0, "think": 0, "g": 0, "aren": 0, "includ": [0, 1, 2], "contribut": 0, "other": [0, 1, 2], "like": [0, 1], "desorpt": 0, "dissoci": [0, 1], "reconstruct": 0, "suppli": 0, "well": [0, 2], "when": 0, "sp": 0, "rx": 0, "sinc": [0, 1], "ommit": 0, "detector": 0, "instead": 0, "initi": [0, 1], "after": 0, "latter": 0, "over": [0, 2], "min_": 0, "file_out": 0, "ad": [0, 1], "split": 0, "rx_id": 0, "anomol": 0, "get_tag": 0, "anom": 0, "is_adsorbate_dissoci": 0, "is_adsorbate_desorb": 0, "has_surface_chang": 0, "is_adsorbate_intercal": 0, "rx_energi": 0, "get_potential_energi": [0, 1], "append": 0, "relaxation_idx": 0, "relaxed_atom": 0, "relaxed_energy_ml": 0, "df": 0, "datafram": 0, "copi": 0, "reset_index": 0, "min": 0, "tolist": 0, "min_e_ml": 0, "df_h": 0, "df_nnh": 0, "df_flat": 0, "merg": 0, "add": [0, 1], "literature_data": 0, "df_all": 0, "ax1": 0, "ax2": 0, "sharei": 0, "set_figheight": 0, "x": [0, 1], "min_e_ml_x": 0, "y": [0, 1], "e_lit_h": 0, "set_titl": 0, "linewidth": 0, "slope": 0, "intercept": 0, "r": [0, 1], "p": 0, "se": 0, "legend": [0, 1], "2f": 0, "sq": 0, "loc": 0, "upper": 0, "left": 0, "scatter": 0, "axi": 0, "squar": 0, "set_xlim": 0, "set_ylim": 0, "set_xlabel": 0, "de": 0, "ev": [0, 1], "set_ylabel": 0, "min_e_ml_i": 0, "e_lit_nnh": 0, "set_figwidth": 0, "_stats_mstats_common": 0, "182": 0, "runtimewarn": 0, "invalid": 0, "encount": 0, "scalar": 0, "divid": 0, "ssxym": 0, "ssxm": 0, "196": 0, "sqrt": 0, "199": 0, "slope_stderr": 0, "ssym": 0, "comp": 0, "composit": [0, 2], "c": [0, 1], "txt": 0, "annot": 0, "b": [0, 1], "introduc": [1, 2], "simpl": [1, 2], "adsorb": [1, 2], "where": [1, 2], "specifi": 1, "conceptu": 1, "thi": 1, "densiti": [1, 2], "function": [1, 2], "slab": 1, "surfac": 1, "an": [1, 2], "run": [1, 2], "relax": [1, 2], "get": 1, "state": [1, 2], "combin": 1, "directli": 1, "know": 1, "than": 1, "might": 1, "exampl": 1, "oxygen": 1, "convention": 1, "o2": 1, "o": 1, "co": 1, "z": 1, "h2": 1, "h2o": 1, "w": 1, "n2": 1, "cxhyoznw": 1, "end": 1, "altern": 1, "through": 1, "thermodynam": 1, "cycl": 1, "rh1": 1, "rh2": 1, "re1": 1, "03": 1, "re2": 1, "direct": 1, "Then": [1, 2], "2o2": 1, "base": 1, "atct": 1, "anl": 1, "gov": 1, "thermochem": 1, "version": 1, "118": 1, "speci": 1, "species_numb": 1, "986": 1, "format": 1, "water": 1, "standard": 1, "also": [1, 2], "current": [1, 2], "art": [1, 2], "request": 1, "exist": 1, "url": 1, "dl": 1, "fbaipublicfil": 1, "opencatalystproject": 1, "2023_03": 1, "s2ef": 1, "wb": 1, "content": 1, "somewhat": 1, "verbos": 1, "debug": 1, "purpos": [1, 2], "expandus": 1, "result": 1, "all": [1, 2], "trajectori": 1, "memori": 1, "modul": 1, "experiment": 1, "lattic": 1, "constant": 1, "error": 1, "few": [1, 2], "percent": 1, "constrain": 1, "ani": 1, "layer": 1, "fcc111": 1, "add_adsorb": 1, "size": [1, 2], "vacuum": 1, "height": 1, "posit": 1, "fcc": 1, "set_calcul": 1, "slab_": 1, "09": 1, "715910": 1, "6969": 1, "541390": 1, "9693": 1, "373406": 1, "7141": 1, "291044": 1, "7900": 1, "874835": 1, "7145": 1, "816292": 1, "4962": 1, "787922": 1, "6081": 1, "768941": 1, "7397": 1, "758261": 1, "5152": 1, "737685": 1, "733105": 1, "0383": 1, "2968953537940977": 1, "good": 1, "practic": [1, 2], "your": [1, 2], "make": [1, 2], "expect": 1, "plot": 1, "rotat": [1, 2], "90x": 1, "did": 1, "paper": 1, "111": 1, "264": 1, "convert": 1, "d": 1, "58": 1, "expt": 1, "compar": 1, "68": 1, "account": 1, "biggest": 1, "due": 1, "exchang": 1, "pbe": 1, "wa": [1, 2], "train": 1, "rpbe": 1, "addit": 1, "experi": [1, 2], "tend": 1, "systemat": 1, "calibr": 1, "especi": 1, "augment": 1, "own": [1, 2], "explor": [1, 2], "effect": 1, "top": 1, "xu": 1, "kitchin": 1, "j": 1, "2014": 1, "probe": 1, "configur": [1, 2], "late": 1, "transit": 1, "metal": 1, "phy": 1, "chem": 1, "25597": 1, "25602": 1, "dx": 1, "jp508805h": 1, "support": 1, "work": [1, 2], "re3": 1, "store": [1, 2], "subtl": 1, "stoichiometri": 1, "normal": 1, "ml": 1, "json": 1, "edata": 1, "263842000000002": 1, "si": 1, "sfcc": 1, "po": 1, "nO": 1, "605124": 1, "3385": 1, "601236": 1, "2880": 1, "595288": 1, "1121": 1, "48": 1, "600113": 1, "0672": 1, "604842": 1, "0800": 1, "52": 1, "596031": 1, "0786": 1, "54": 1, "593623": 1, "1003": 1, "592945": 1, "0579": 1, "595174": 1, "0289": 1, "014825627803802": 1, "portion": 1, "figur": 1, "hcp": 1, "across": 1, "highli": 1, "similar": 1, "At": 1, "higher": 1, "agreement": 1, "extrapol": 1, "fine": [1, 2], "tune": [1, 2], "refdata": 1, "cu": 1, "ag": 1, "rh": 1, "ir": 1, "entri": 1, "none": 1, "suppress": 1, "96": 1, "139": 1, "54851579666138": 1, "pretti": 1, "typic": [1, 2], "deviat": 1, "xlabel": 1, "ref": 1, "ylabel": 1, "same": 1, "trend": 1, "fall": 1, "pariti": 1, "weaker": 1, "bind": 1, "h_": 1, "rel": 1, "better": 1, "complex": 1, "1m": 2, "us": 2, "wide": 2, "arrai": 2, "applic": 2, "properti": 2, "new": 2, "specif": 2, "workshop": 2, "focu": 2, "catalyst": 2, "ocp": 2, "showcas": 2, "sever": 2, "varieti": 2, "explain": 2, "environ": 2, "discuss": 2, "limit": 2, "opportun": 2, "futur": 2, "research": 2, "particip": 2, "laptop": 2, "internet": 2, "capabl": 2, "A": 2, "access": 2, "via": 2, "mainstai": 2, "molecular": 2, "its": 2, "high": 2, "cost": 2, "past": 2, "decad": 2, "increasingli": 2, "surrog": 2, "supplement": 2, "mlp": 2, "earli": 2, "dai": 2, "neural": 2, "network": 2, "were": 2, "cartesian": 2, "coordin": 2, "system": 2, "featur": 2, "success": 2, "lack": 2, "physic": 2, "notabl": 2, "invari": 2, "translat": 2, "permut": 2, "extens": 2, "investig": 2, "year": 2, "ago": 2, "symmetri": 2, "intens": 2, "had": 2, "enabl": 2, "substanti": 2, "vector": 2, "quadrat": 2, "element": 2, "usual": 2, "implicit": 2, "transferr": 2, "hand": 2, "craft": 2, "adapt": 2, "thu": 2, "judgement": 2, "select": 2, "while": 2, "progess": 2, "made": 2, "mitig": 2, "overtaken": 2, "method": 2, "todai": 2, "convolut": 2, "repres": 2, "edg": 2, "connect": 2, "roughli": 2, "interact": 2, "bond": 2, "learnabl": 2, "oper": 2, "pair": 2, "triplet": 2, "quadruplet": 2, "messag": 2, "central": 2, "accumul": 2, "studi": 2, "handl": 2, "began": 2, "appear": 2, "regularli": 2, "literatur": 2, "around": 2, "2016": 2, "consist": 2, "three": 2, "umbrella": 2, "architectur": 2, "associ": 2, "cgcnn": 2, "arxiv": 2, "schnet": 2, "dimenet": 2, "forcenet": 2, "spinconv": 2, "gemnet": 2, "dt": 2, "painn": 2, "oc": 2, "scn": 2, "correspond": 2, "bader": 2, "charg": 2, "choos": 2, "script": 2, "shell": 2, "compat": 2, "abov": 2, "scratch": 2, "notebook": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"us": [0, 1], "ocp": [0, 1, 3], "enumer": 0, "adsorb": 0, "catalyst": 0, "surfac": 0, "introduct": [0, 1, 2], "slab": 0, "configur": 0, "run": 0, "relax": 0, "work": 0, "out": 0, "singl": 0, "exampl": 0, "an": 0, "ml": 0, "all": 0, "system": 0, "thi": [0, 2], "lot": 0, "memori": 0, "pars": 0, "trajectori": 0, "post": 0, "process": 0, "make": 0, "pariti": 0, "plot": 0, "valu": 0, "obtain": 0, "v": 0, "report": 0, "paper": 0, "figur": 0, "6b": 0, "compar": 0, "literatur": 0, "result": 0, "molecular": 1, "simul": [1, 2], "calcul": [1, 3], "adsorpt": 1, "energi": 1, "exercis": 1, "coverag": 1, "depend": 1, "site": 1, "correl": 1, "next": 1, "step": 1, "util": 2, "larg": 2, "graph": 2, "base": 2, "pre": 2, "train": 2, "machin": 2, "learn": 2, "potenti": 2, "atomist": 2, "abstract": 2, "model": 2, "dataset": 2, "task": 2, "checkpoint": 2, "goal": 2, "tutori": 2, "ASE": 3, "compat": 3}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})