Search.setIndex({"docnames": ["NRR/NRR_example", "OCP-introduction", "intro", "ocp-modules/ase-calculator"], "filenames": ["NRR/NRR_example.ipynb", "OCP-introduction.ipynb", "intro.md", "ocp-modules/ase-calculator.rst"], "titles": ["Using OCP to enumerate adsorbates on catalyst surfaces", "Introduction to using OCP in molecular simulations", "Utilizing large, graph-based, pre-trained  machine learned potentials in atomistic simulations", "ASE-compatible calculator for OCP"], "terms": {"from": [0, 1, 2], "ocpmodel": [0, 1], "common": [0, 1], "ase_util": [0, 1], "import": [0, 1, 2], "ocpcalcul": [0, 1], "ase": [0, 1, 2], "io": 0, "optim": [0, 1, 2], "bfg": [0, 1], "sy": 0, "scipi": 0, "stat": 0, "linregress": 0, "pickl": 0, "matplotlib": 0, "pyplot": 0, "plt": [0, 1], "ocdata": 0, "core": 0, "adsorbateslabconfig": 0, "bulk": 0, "os": [0, 1], "glob": 0, "panda": 0, "pd": [0, 1], "util": 0, "detecttrajanomali": 0, "option": 0, "see": [0, 1], "below": [0, 1], "numpi": 0, "np": 0, "hello": 0, "all": [0, 1, 2], "we": [0, 1, 2], "ar": [0, 1, 2], "so": [0, 1], "glad": 0, "you": [0, 1, 2], "could": [0, 1, 2], "join": 0, "learn": 0, "bit": 0, "more": 0, "about": [0, 1, 2], "model": [0, 1], "acceler": [0, 2], "chemic": 0, "simul": 0, "reproduc": [0, 1], "fig": [0, 1], "follow": 0, "zhou": 0, "jing": 0, "et": 0, "al": 0, "enhanc": 0, "catalyt": 0, "activ": 0, "bimetal": 0, "order": 0, "nitrogen": 0, "reduct": 0, "reaction": [0, 1, 2], "perturb": 0, "scale": [0, 2], "relat": [0, 2], "ac": 0, "catalysi": [0, 2], "13": 0, "4": [0, 1, 2], "2023": [0, 1], "2190": 0, "2201": 0, "To": [0, 1, 2], "do": [0, 1, 2], "thi": [0, 1], "them": [0, 2], "find": [0, 2], "lowest": [0, 1], "energi": [0, 2], "assess": 0, "between": [0, 1, 2], "predict": [0, 1, 2], "those": [0, 2], "final": [0, 2], "separ": 0, "nrr": 0, "favor": 0, "her": 0, "domain": 0, "Be": 0, "sure": [0, 1], "set": [0, 2], "path": [0, 1], "config": [0, 2], "py": 0, "point": [0, 1, 2], "correct": [0, 1], "place": [0, 1], "pass": [0, 2], "an": [0, 1, 2], "argument": 0, "The": [0, 1, 2], "databas": 0, "can": [0, 1, 2], "found": 0, "pkl": 0, "show": [0, 2], "one": [0, 1, 2], "explicitli": 0, "here": [0, 1], "exampl": [0, 1], "autom": 0, "fashion": 0, "breviti": 0, "bulk_src_id": 0, "oqmd": 0, "343039": 0, "adsorbate_smiles_nnh": 0, "n": [0, 1], "nh": 0, "adsorbate_smiles_h": 0, "h": [0, 1], "bulk_src_id_from_db": 0, "bulk_db_path": 0, "nrr_example_bulk": 0, "adsorbate_h": 0, "adsorbate_smiles_from_db": 0, "adsorbate_db_path": 0, "privat": 0, "home": [0, 1], "brookwand": 0, "open": [0, 1, 2], "dataset": [0, 1], "adsorbate_nnh": 0, "from_bulk_get_specific_mil": 0, "specific_mil": 0, "1": [0, 1], "perform": 0, "heurist": 0, "placement": 0, "heuristic_adslab": 0, "0": [0, 1], "mode": 0, "random": 0, "adsorbml": 0, "num_sit": 0, "100": [0, 1], "random_adslab": 0, "random_site_heuristic_plac": 0, "20": [0, 1], "adslab": 0, "atoms_list": 0, "There": [0, 1, 2], "2": [0, 1], "how": [0, 1, 2], "calcul": [0, 2], "within": 0, "ASE": [0, 1, 2], "framework": [0, 2], "By": 0, "write": [0, 1], "object": 0, "lmdb": 0, "main": 0, "repo": 0, "realli": 0, "onli": 0, "adequ": 0, "small": [0, 1], "stuff": 0, "what": [0, 1, 2], "i": 0, "plan": 0, "mani": 0, "should": 0, "definit": 0, "detail": [0, 1, 2], "ha": [0, 2], "been": [0, 2], "provid": [0, 2], "is2r": 0, "instruct": 0, "And": 0, "inform": [0, 1], "onc": 0, "written": 0, "need": [0, 1, 2], "checkpoint": [0, 1], "file": [0, 2], "That": 0, "download": [0, 1, 2], "print": [0, 1], "each": [0, 1, 2], "step": 0, "lot": 0, "just": [0, 1], "demonstr": 0, "checkpoint_path": 0, "ocp_checkpoint": 0, "escn_l6_m3_lay20_all_md_s2ef": [0, 1], "pt": [0, 1], "makedir": 0, "f": [0, 1], "data": [0, 1, 2], "_": 0, "exist_ok": 0, "true": [0, 1], "defin": 0, "calc": [0, 1], "cpu": [0, 1], "fals": [0, 1], "mkdir": 0, "_h": 0, "opt": [0, 1], "test": 0, "traj": 0, "fmax": [0, 1], "05": [0, 1], "amp": [0, 1], "cmd": [0, 1], "checkpoint_dir": [0, 1], "07": [0, 1], "09": [0, 1], "59": 0, "44": [0, 1], "commit": [0, 1], "819e11d": 0, "identifi": [0, 1], "logs_dir": [0, 1], "log": [0, 1], "tensorboard": [0, 1], "print_everi": [0, 1], "results_dir": [0, 1], "seed": [0, 1], "null": [0, 1], "timestamp_id": [0, 1], "gpu": [0, 1], "logger": [0, 1], "escn": [0, 1, 2], "model_attribut": [0, 1], "basis_width_scalar": [0, 1], "cutoff": [0, 1], "12": [0, 1], "distance_funct": [0, 1], "gaussian": [0, 1], "hidden_channel": [0, 1], "384": [0, 1], "lmax_list": [0, 1], "6": [0, 1], "max_neighbor": [0, 1], "mmax_list": [0, 1], "3": [0, 1], "num_lay": [0, 1], "num_sphere_sampl": [0, 1], "128": [0, 1], "otf_graph": [0, 1], "regress_forc": [0, 1], "sphere_channel": [0, 1], "160": [0, 1], "use_pbc": [0, 1], "noddp": [0, 1], "batch_siz": [0, 1], "clip_grad_norm": [0, 1], "ema_decai": [0, 1], "999": [0, 1], "energy_coeffici": [0, 1], "eval_batch_s": [0, 1], "eval_everi": [0, 1], "5000": [0, 1], "force_coeffici": [0, 1], "loss_energi": [0, 1], "mae": [0, 1], "loss_forc": [0, 1], "l2mae": [0, 1], "lr_gamma": [0, 1], "lr_initi": [0, 1], "0008": [0, 1], "lr_mileston": [0, 1], "433166": [0, 1], "541460": [0, 1], "649750": [0, 1], "max_epoch": [0, 1], "24": [0, 1], "num_work": [0, 1], "8": [0, 1], "adamw": [0, 1], "optimizer_param": [0, 1], "amsgrad": [0, 1], "warmup_factor": [0, 1], "warmup_step": [0, 1], "slurm": [0, 1], "additional_paramet": [0, 1], "constraint": [0, 1], "volta32gb": [0, 1], "cpus_per_task": [0, 1], "9": [0, 1], "folder": [0, 1], "zitnick": [0, 1], "ocp_log": [0, 1], "4486283": [0, 1], "gpus_per_nod": [0, 1], "job_id": [0, 1], "job_nam": [0, 1], "l6": [0, 1], "m3": [0, 1], "lay20": [0, 1], "md": [0, 1], "mem": [0, 1], "480gb": [0, 1], "node": [0, 1, 2], "ntasks_per_nod": [0, 1], "partit": [0, 1], "time": [0, 1], "4320": [0, 1], "task": [0, 1], "trajectory_lmdb": [0, 1], "descript": [0, 1], "regress": [0, 1], "forc": [0, 1, 2], "dft": [0, 1, 2], "eval_on_free_atom": [0, 1], "grad_input": [0, 1], "atom": [0, 1, 2], "label": [0, 1, 2], "potenti": [0, 1], "metric": [0, 1], "primary_metr": [0, 1], "forces_ma": [0, 1], "relax_opt": [0, 1], "alpha": [0, 1], "70": [0, 1], "damp": [0, 1], "maxstep": [0, 1], "04": [0, 1], "memori": [0, 1], "50": [0, 1, 2], "name": [0, 1], "lbfg": [0, 1], "traj_dir": [0, 1], "traj_id": [0, 1], "relaxation_step": [0, 1], "200": [0, 1], "train_on_free_atom": [0, 1], "type": [0, 1], "write_po": [0, 1], "trainer": [0, 1], "33": [0, 1], "172671": 0, "6259": 0, "147689": 0, "5858": 0, "34": [0, 1], "016639": 0, "1566": 0, "016496": 0, "1751": 0, "008896": 0, "1807": 0, "5": [0, 1, 2], "003126": 0, "1366": 0, "35": 0, "000565": 0, "0679": 0, "7": [0, 1], "002134": 0, "0779": 0, "006986": 0, "0875": 0, "008139": 0, "0965": 0, "10": [0, 1], "36": 0, "009709": 0, "0877": 0, "11": 0, "014754": 0, "0572": 0, "013468": 0, "0324": 0, "now": 0, "everyth": 0, "silenc": 0, "out": 0, "WILL": 0, "take": [0, 2], "1h": 0, "19": [0, 1], "which": [0, 1, 2], "feel": 0, "too": 0, "long": 0, "rb": 0, "load": [0, 1, 2], "bulk_id": 0, "datafram": 0, "src_id": 0, "tolist": 0, "establish": 0, "heuristic_adslabs_h": 0, "heuristic_adslabs_nnh": 0, "_nnh": 0, "old_stdout": 0, "stdout": 0, "backup": 0, "current": [0, 1, 2], "devnul": 0, "w": [0, 1], "up": [0, 1], "idx": 0, "As": 0, "check": 0, "desorb": 0, "disassoci": 0, "intercal": 0, "chang": 0, "becaus": [0, 1], "effect": [0, 1], "our": 0, "referenc": [0, 1], "scheme": 0, "mai": [0, 1], "erron": 0, "For": [0, 1], "suppli": 0, "well": [0, 2], "It": [0, 1, 2], "necessari": 0, "when": 0, "sp": 0, "rx": 0, "later": 0, "sinc": [0, 1], "don": [0, 1], "t": [0, 1], "have": [0, 1, 2], "ommit": 0, "detector": 0, "instead": 0, "initi": [0, 1], "If": [0, 1], "after": 0, "latter": 0, "iter": 0, "over": [0, 2], "extract": 0, "min_": 0, "file_out": 0, "ad": [0, 1], "split": 0, "rx_id": 0, "read": 0, "anomol": 0, "get_tag": 0, "anom": 0, "is_adsorbate_dissoci": 0, "is_adsorbate_desorb": 0, "has_surface_chang": 0, "is_adsorbate_intercal": 0, "rx_energi": 0, "get_potential_energi": [0, 1], "append": 0, "relaxation_idx": 0, "relaxed_atom": 0, "relaxed_energy_ml": 0, "df": 0, "copi": 0, "reset_index": 0, "min": 0, "min_e_ml": 0, "df_h": 0, "df_nnh": 0, "nnh": 0, "df_flat": 0, "merg": 0, "add": [0, 1], "literature_data": 0, "df_all": 0, "ax1": 0, "ax2": 0, "subplot": [0, 1], "sharei": 0, "set_figheight": 0, "15": [0, 2], "x": [0, 1], "min_e_ml_x": 0, "y": [0, 1], "e_lit_h": 0, "set_titl": 0, "k": [0, 1], "linewidth": 0, "slope": 0, "intercept": 0, "r": [0, 1], "p": 0, "se": 0, "legend": [0, 1], "2f": 0, "sq": 0, "loc": 0, "upper": 0, "left": 0, "scatter": 0, "axi": 0, "squar": 0, "set_xlim": 0, "set_ylim": 0, "set_xlabel": 0, "de": 0, "ev": [0, 1], "set_ylabel": 0, "min_e_ml_i": 0, "e_lit_nnh": 0, "set_figwidth": 0, "savefig": 0, "png": 0, "comp": 0, "composit": [0, 2], "c": [0, 1], "txt": 0, "annot": 0, "b": [0, 1], "fig_6b": 0, "introduc": [1, 2], "start": [1, 2], "simpl": [1, 2], "adsorb": [1, 2], "where": [1, 2], "specifi": 1, "want": [1, 2], "conceptu": 1, "like": 1, "would": 1, "densiti": [1, 2], "function": [1, 2], "theori": [1, 2], "creat": 1, "slab": 1, "surfac": 1, "guess": 1, "run": [1, 2], "relax": [1, 2], "get": 1, "geometri": [1, 2], "comput": [1, 2], "refer": 1, "state": [1, 2], "care": 1, "though": 1, "some": [1, 2], "combin": 1, "return": 1, "total": 1, "directli": 1, "know": 1, "differ": [1, 2], "than": 1, "might": 1, "oxygen": 1, "convention": 1, "o2": 1, "o": 1, "done": 1, "co": 1, "z": 1, "h2": 1, "h2o": 1, "n2": 1, "cxhyoznw": 1, "end": 1, "altern": 1, "possibl": [1, 2], "through": 1, "thermodynam": 1, "cycl": 1, "other": [1, 2], "look": 1, "rh1": 1, "rh2": 1, "re1": 1, "03": 1, "re2": 1, "direct": 1, "Then": [1, 2], "2o2": 1, "base": 1, "http": 1, "atct": 1, "anl": 1, "gov": 1, "thermochem": 1, "version": 1, "118": 1, "speci": 1, "species_numb": 1, "986": 1, "format": 1, "water": 1, "standard": 1, "also": [1, 2], "first": [1, 2], "art": [1, 2], "cell": 1, "alreadi": 1, "request": 1, "exist": 1, "url": 1, "dl": 1, "fbaipublicfil": 1, "com": 1, "opencatalystproject": 1, "2023_03": 1, "s2ef": 1, "wb": 1, "content": 1, "output": [1, 2], "somewhat": 1, "verbos": 1, "debug": 1, "purpos": [1, 2], "expandus": 1, "jovyan": 1, "share": 1, "scratch": [1, 2], "jkitchin": 1, "tutori": 1, "06": 1, "3aa7a61": 1, "result": 1, "trajectori": 1, "build": [1, 2], "modul": 1, "experiment": 1, "lattic": 1, "constant": 1, "default": 1, "error": 1, "few": [1, 2], "percent": 1, "In": [1, 2], "constrain": 1, "ani": 1, "layer": 1, "fcc111": 1, "add_adsorb": 1, "size": [1, 2], "vacuum": 1, "height": 1, "posit": 1, "fcc": 1, "set_calcul": 1, "slab_": 1, "32": 1, "744689": 1, "6982": 1, "517990": 1, "9685": 1, "363595": 1, "7206": 1, "273019": 1, "7950": 1, "868181": 1, "7050": 1, "811486": 1, "4946": 1, "785268": 1, "6083": 1, "770407": 1, "7404": 1, "752678": 1, "5184": 1, "741967": 1, "1253": 1, "736692": 1, "0372": 1, "2933084654808042": 1, "good": 1, "practic": [1, 2], "your": [1, 2], "make": [1, 2], "thei": [1, 2], "expect": 1, "visual": 1, "plot": 1, "plot_atom": 1, "ax": 1, "rotat": [1, 2], "90x": 1, "set_axis_off": 1, "did": 1, "paper": 1, "111": 1, "264": 1, "convert": 1, "dissoci": 1, "d": 1, "58": 1, "expt": 1, "compar": 1, "68": 1, "account": 1, "biggest": 1, "due": 1, "exchang": 1, "pbe": 1, "wa": [1, 2], "train": 1, "rpbe": 1, "addit": 1, "includ": [1, 2], "experi": [1, 2], "These": [1, 2], "tend": 1, "systemat": 1, "calibr": 1, "especi": 1, "augment": 1, "own": [1, 2], "explor": [1, 2], "try": 1, "bridg": 1, "top": 1, "inspect": 1, "xu": 1, "kitchin": 1, "j": 1, "2014": 1, "probe": 1, "configur": [1, 2], "late": 1, "transit": 1, "metal": 1, "phy": 1, "chem": 1, "25597": 1, "25602": 1, "dx": 1, "doi": 1, "org": 1, "1021": 1, "jp508805h": 1, "support": 1, "work": [1, 2], "number": [1, 2], "re3": 1, "store": [1, 2], "structur": [1, 2], "subtl": 1, "stoichiometri": 1, "normal": 1, "25": 1, "ml": 1, "json": 1, "edata": 1, "263842000000002": 1, "si": 1, "s": 1, "sfcc": 1, "construct": [1, 2], "symbol": 1, "po": 1, "pbc": 1, "nO": 1, "37": 1, "00": 1, "608057": 1, "3374": 1, "603557": 1, "2932": 1, "01": 1, "593898": 1, "0957": 1, "607993": 1, "0720": 1, "595942": 1, "0854": 1, "591433": 1, "0833": 1, "588323": 1, "0821": 1, "592364": 1, "0664": 1, "590290": 1, "0248": 1, "019709632396697": 1, "portion": 1, "figur": 1, "hcp": 1, "across": 1, "highli": 1, "similar": 1, "At": 1, "higher": 1, "agreement": 1, "extrapol": 1, "fine": [1, 2], "tune": [1, 2], "tqdm": 1, "t0": 1, "refdata": 1, "cu": 1, "ag": 1, "rh": 1, "ir": 1, "entri": 1, "logfil": 1, "none": 1, "suppress": 1, "elaps": 1, "second": [1, 2], "44it": 1, "21it": 1, "81it": 1, "20it": 1, "39it": 1, "41it": 1, "80it": 1, "1206214427948": 1, "xlabel": 1, "ref": 1, "ylabel": 1, "same": 1, "trend": 1, "fall": 1, "pariti": 1, "line": 1, "littl": 1, "weaker": 1, "bind": 1, "h_": 1, "deviat": 1, "rel": 1, "better": 1, "most": 2, "recent": 2, "1m": 2, "us": 2, "wide": 2, "arrai": 2, "applic": 2, "rang": 2, "materi": 2, "properti": 2, "new": 2, "specif": 2, "workshop": 2, "focu": 2, "catalyst": 2, "project": 2, "ocp": 2, "showcas": 2, "sever": 2, "varieti": 2, "explain": 2, "environ": 2, "leverag": 2, "typic": 2, "adsorpt": 2, "discuss": 2, "limit": 2, "opportun": 2, "futur": 2, "research": 2, "particip": 2, "laptop": 2, "internet": 2, "capabl": 2, "A": 2, "access": 2, "via": 2, "mainstai": 2, "molecular": 2, "its": 2, "high": 2, "cost": 2, "past": 2, "two": 2, "decad": 2, "increasingli": 2, "surrog": 2, "supplement": 2, "call": 2, "mlp": 2, "earli": 2, "dai": 2, "neural": 2, "network": 2, "were": 2, "cartesian": 2, "coordin": 2, "system": 2, "featur": 2, "success": 2, "lack": 2, "physic": 2, "notabl": 2, "invari": 2, "translat": 2, "permut": 2, "extens": 2, "being": 2, "investig": 2, "year": 2, "ago": 2, "symmetri": 2, "develop": 2, "intens": 2, "had": 2, "enabl": 2, "substanti": 2, "progress": 2, "vector": 2, "quadrat": 2, "element": 2, "usual": 2, "implicit": 2, "transferr": 2, "hand": 2, "craft": 2, "adapt": 2, "thu": 2, "judgement": 2, "select": 2, "while": 2, "progess": 2, "made": 2, "mitig": 2, "approach": 2, "overtaken": 2, "method": 2, "todai": 2, "convolut": 2, "gener": 2, "repres": 2, "edg": 2, "connect": 2, "roughli": 2, "interact": 2, "bond": 2, "learnabl": 2, "oper": 2, "pair": 2, "triplet": 2, "quadruplet": 2, "messag": 2, "central": 2, "accumul": 2, "desir": 2, "studi": 2, "handl": 2, "kind": 2, "began": 2, "appear": 2, "regularli": 2, "literatur": 2, "around": 2, "2016": 2, "consist": 2, "three": 2, "thing": 2, "umbrella": 2, "architectur": 2, "associ": 2, "cgcnn": 2, "arxiv": 2, "code": 2, "schnet": 2, "dimenet": 2, "forcenet": 2, "spinconv": 2, "gemnet": 2, "dt": 2, "painn": 2, "parallel": 2, "oc": 2, "scn": 2, "correspond": 2, "bader": 2, "charg": 2, "instal": 2, "choos": 2, "script": 2, "shell": 2, "compat": 2, "abov": 2, "jupyt": 2, "notebook": 2, "setup": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"us": [0, 1], "ocp": [0, 1, 3], "enumer": 0, "adsorb": 0, "catalyst": 0, "surfac": 0, "introduct": [0, 1, 2], "slab": 0, "configur": 0, "run": 0, "relax": 0, "ml": 0, "pars": 0, "trajectori": 0, "post": 0, "process": 0, "make": 0, "pariti": 0, "plot": 0, "valu": 0, "obtain": 0, "v": 0, "report": 0, "paper": 0, "figur": 0, "6b": 0, "compar": 0, "literatur": 0, "result": 0, "molecular": 1, "simul": [1, 2], "calcul": [1, 3], "adsorpt": 1, "energi": 1, "exercis": 1, "coverag": 1, "depend": 1, "site": 1, "correl": 1, "next": 1, "step": 1, "util": 2, "larg": 2, "graph": 2, "base": 2, "pre": 2, "train": 2, "machin": 2, "learn": 2, "potenti": 2, "atomist": 2, "abstract": 2, "model": 2, "dataset": 2, "task": 2, "checkpoint": 2, "goal": 2, "thi": 2, "tutori": 2, "ASE": 3, "compat": 3}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})