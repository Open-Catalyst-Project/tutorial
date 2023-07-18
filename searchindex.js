Search.setIndex({"docnames": ["NRR/NRR_example", "OCP-introduction", "fine-tuning", "fine-tuning/fine-tuning-oxides", "intro", "ocp-modules/ase-calculator"], "filenames": ["NRR/NRR_example.ipynb", "OCP-introduction.ipynb", "fine-tuning.ipynb", "fine-tuning/fine-tuning-oxides.ipynb", "intro.md", "ocp-modules/ase-calculator.rst"], "titles": ["Using OCP to enumerate adsorbates on catalyst surfaces", "Introduction to using OCP in molecular simulations", "Create the training data", "Fine tuning a model", "Utilizing large, graph-based, pre-trained  machine learned potentials in atomistic simulations", "ASE-compatible calculator for OCP"], "terms": {"In": [0, 1, 3, 4], "previou": 0, "we": [0, 1, 2, 3, 4], "construct": [0, 1, 3, 4], "model": [0, 1, 2], "desir": [0, 4], "site": 0, "here": [0, 1, 3], "leverag": [0, 1, 4], "code": [0, 4], "autom": [0, 1], "thi": [0, 1, 2, 3], "The": [0, 1, 2, 3, 4], "goal": 0, "section": [0, 3], "gener": [0, 3, 4], "candid": [0, 3], "structur": [0, 1, 2, 3, 4], "comput": [0, 1, 4], "energet": 0, "filter": [0, 2], "most": [0, 1, 4], "relev": 0, "ones": [0, 3], "one": [0, 1, 3, 4], "more": [0, 1, 3], "recent": [0, 4], "escn": [0, 1, 2, 4], "from": [0, 1, 2, 3, 4], "ocpmodel": [0, 1, 2, 3], "common": [0, 1, 2, 3], "ase_util": [0, 1, 3], "import": [0, 1, 2, 3, 4], "ocpcalcul": [0, 1, 3], "ase": [0, 1, 2, 3, 4], "io": 0, "optim": [0, 1, 2, 3, 4], "bfg": [0, 1], "sy": 0, "scipi": 0, "stat": 0, "linregress": 0, "pickl": 0, "matplotlib": [0, 1, 3], "pyplot": [0, 1, 3], "plt": [0, 1, 3], "time": [0, 1, 3], "ocdata": 0, "core": 0, "adsorbateslabconfig": 0, "bulk": 0, "os": [0, 1, 2, 3], "glob": 0, "panda": 0, "pd": [0, 1, 2], "util": 0, "detecttrajanomali": 0, "reproduc": [0, 1, 3], "fig": [0, 1], "follow": [0, 3], "zhou": 0, "jing": 0, "et": 0, "al": 0, "enhanc": 0, "catalyt": 0, "activ": [0, 3], "bimetal": 0, "order": [0, 3], "nitrogen": [0, 1], "reduct": [0, 1], "reaction": [0, 1, 4], "perturb": 0, "scale": [0, 3, 4], "relat": [0, 4], "ac": [0, 3], "catalysi": [0, 4], "134": [0, 3], "2023": [0, 1, 3], "2190": 0, "2201": 0, "http": [0, 1, 3], "doi": [0, 1, 3], "org": [0, 1, 3], "10": [0, 1, 3], "1021": [0, 1, 3], "acscat": 0, "2c05877": 0, "gist": 0, "correl": 0, "between": [0, 1, 4], "h": [0, 1], "nnh": 0, "across": [0, 1], "mani": [0, 3], "differ": [0, 1, 3, 4], "alloi": 0, "Then": [0, 1, 3, 4], "thei": [0, 1, 3, 4], "identifi": [0, 1, 3], "divid": 0, "line": [0, 1, 2, 3], "separ": [0, 3], "known": 0, "her": 0, "those": [0, 3, 4], "nrr": 0, "To": [0, 1, 3, 4], "do": [0, 1, 3, 4], "them": [0, 3, 4], "find": [0, 3, 4], "lowest": [0, 1], "energi": [0, 2, 3, 4], "assess": 0, "predict": [0, 1, 2, 3, 4], "final": [0, 4], "favor": 0, "domain": 0, "Be": 0, "sure": [0, 1, 3], "set": [0, 2, 4], "path": [0, 1, 2, 3], "config": [0, 2, 3, 4], "py": [0, 2, 3], "point": [0, 1, 3, 4], "correct": [0, 1, 3], "place": [0, 1, 3], "pass": [0, 4], "argument": [0, 2, 3], "databas": [0, 3], "can": [0, 1, 2, 3, 4], "found": [0, 3], "pkl": 0, "show": [0, 3, 4], "explicitli": 0, "fashion": 0, "breviti": 0, "pathlib": [0, 2, 3], "db": [0, 2, 3], "__file__": [0, 2, 3], "parent": [0, 2, 3], "posixpath": [0, 2, 3], "home": [0, 1, 2, 3], "jovyan": [0, 1, 3], "share": [0, 1, 3], "scratch": [0, 1, 3, 4], "jkitchin": [0, 1, 3], "tutori": [0, 1, 2, 3], "load": [0, 1, 2, 3, 4], "id": [0, 3], "creat": [0, 1, 3], "refer": [0, 1], "want": [0, 1, 2, 3, 4], "bulk_src_id": 0, "oqmd": 0, "343039": 0, "adsorbate_smiles_nnh": 0, "n": [0, 1, 2, 3], "nh": 0, "adsorbate_smiles_h": 0, "bulk_src_id_from_db": 0, "bulk_db_path": 0, "nrr_example_bulk": 0, "adsorbate_h": 0, "adsorbate_smiles_from_db": 0, "adsorbate_db_path": 0, "adsorbate_nnh": 0, "from_bulk_get_specific_mil": 0, "specific_mil": 0, "1": [0, 1, 2, 3], "ag36pd12": 0, "0": [0, 1, 2, 3], "16666666666666657": 0, "true": [0, 1, 2, 3], "now": [0, 3], "need": [0, 1, 3, 4], "potenti": [0, 1, 3], "placement": 0, "two": [0, 4], "kind": [0, 4], "guess": [0, 1], "heurist": 0, "random": [0, 2, 3], "approach": [0, 3, 4], "cell": [0, 1, 2, 3], "13": [0, 3], "adsorpt": [0, 2, 4], "geometri": [0, 1, 3, 4], "perform": 0, "heuristic_adslab": 0, "mode": [0, 2, 3], "adsorbml": 0, "num_sit": 0, "100": [0, 1, 2, 3], "4": [0, 1, 2, 3, 4], "random_adslab": 0, "random_site_heuristic_plac": 0, "adslab": 0, "atoms_list": 0, "len": [0, 2, 3], "let": [0, 3], "s": [0, 1, 3], "see": [0, 1, 3], "what": [0, 1, 3, 4], "ar": [0, 1, 2, 3, 4], "look": [0, 1, 3], "It": [0, 1, 2, 3, 4], "littl": [0, 1, 3], "tricki": 0, "tini": 0, "atom": [0, 1, 2, 3, 4], "some": [0, 1, 3, 4], "inspect": [0, 1, 3], "you": [0, 1, 2, 3, 4], "ontop": 0, "bridg": [0, 1], "hollow": 0, "exhaust": 0, "search": [0, 1], "increas": 0, "number": [0, 1, 4], "check": [0, 3], "possibl": [0, 1, 4], "main": [0, 2, 3], "idea": 0, "probabl": [0, 3], "visual": [0, 1], "plot_atom": [0, 1], "ax": [0, 1], "subplot": [0, 1], "i": [0, 2, 3], "set_axis_off": [0, 1], "rang": [0, 2, 4], "16": [0, 3], "tight_layout": 0, "There": [0, 1, 3, 4], "2": [0, 1, 2, 3], "option": 0, "how": [0, 1, 3, 4], "calcul": [0, 2, 3, 4], "within": 0, "ASE": [0, 1, 2, 4], "framework": [0, 4], "By": 0, "write": [0, 1, 2, 3], "object": [0, 3], "lmdb": 0, "repo": 0, "realli": 0, "onli": [0, 2, 3], "adequ": 0, "small": [0, 1, 2], "stuff": 0, "plan": 0, "should": 0, "definit": 0, "detail": [0, 1, 3, 4], "about": [0, 1, 4], "ha": [0, 3, 4], "been": [0, 4], "provid": [0, 3, 4], "is2r": 0, "instruct": 0, "And": 0, "inform": [0, 1, 2, 3], "onc": 0, "written": 0, "checkpoint": [0, 1, 2], "file": [0, 4], "That": [0, 3], "download": [0, 1, 4], "print": [0, 1, 3], "each": [0, 1, 3, 4], "step": [0, 3], "lot": [0, 3], "so": [0, 1, 3], "just": [0, 1, 2], "demonstr": 0, "happen": 0, "iter": 0, "checkpoint_path": 0, "escn_l6_m3_lay20_all_md_s2ef": [0, 1, 2], "pt": [0, 1, 2, 3], "makedir": [0, 3], "f": [0, 1, 2, 3], "data": [0, 1, 3, 4], "_": 0, "exist_ok": [0, 3], "defin": 0, "calc": [0, 1, 2, 3], "cpu": [0, 1, 2, 3], "fals": [0, 1, 2, 3], "have": [0, 1, 2, 3, 4], "gpu": [0, 1, 2, 3], "If": [0, 1, 3], "amp": [0, 1, 3], "cmd": [0, 1, 3], "checkpoint_dir": [0, 1, 3], "07": [0, 1, 3], "17": [0, 3], "19": [0, 3], "37": [0, 3], "36": [0, 3], "commit": [0, 1, 3], "ab7833d": [0, 1], "logs_dir": [0, 1, 3], "log": [0, 1, 3], "tensorboard": [0, 1, 2, 3], "print_everi": [0, 1, 3], "results_dir": [0, 1, 3], "seed": [0, 1, 3], "null": [0, 1, 3], "timestamp_id": [0, 1, 3], "dataset": [0, 1, 2, 3], "logger": [0, 1, 2, 3], "model_attribut": [0, 1, 3], "basis_width_scalar": [0, 1, 2], "cutoff": [0, 1, 2, 3], "12": [0, 1, 2, 3], "distance_funct": [0, 1, 2], "gaussian": [0, 1, 2, 3], "hidden_channel": [0, 1, 2], "384": [0, 1], "lmax_list": [0, 1, 2], "6": [0, 1, 2, 3], "max_neighbor": [0, 1, 2, 3], "20": [0, 1, 2, 3], "mmax_list": [0, 1, 2], "3": [0, 1, 2, 3], "num_lay": [0, 1, 2], "num_sphere_sampl": [0, 1, 2], "128": [0, 1, 2, 3], "otf_graph": [0, 1, 2, 3], "regress_forc": [0, 1, 2, 3], "sphere_channel": [0, 1, 2], "160": [0, 1, 3], "use_pbc": [0, 1, 2], "noddp": [0, 1, 3], "batch_siz": [0, 1, 2, 3], "clip_grad_norm": [0, 1, 2, 3], "ema_decai": [0, 1, 2, 3], "999": [0, 1, 2, 3], "energy_coeffici": [0, 1, 2, 3], "eval_batch_s": [0, 1, 2, 3], "eval_everi": [0, 1, 2, 3], "5000": [0, 1, 2, 3], "force_coeffici": [0, 1, 2, 3], "loss_energi": [0, 1, 2, 3], "mae": [0, 1, 2, 3], "loss_forc": [0, 1, 2, 3], "l2mae": [0, 1, 2], "lr_gamma": [0, 1, 2], "lr_initi": [0, 1, 2, 3], "0008": [0, 1, 2, 3], "lr_mileston": [0, 1, 2], "433166": [0, 1], "541460": [0, 1], "649750": [0, 1], "max_epoch": [0, 1, 2, 3], "24": [0, 1, 2, 3], "num_work": [0, 1, 2, 3], "8": [0, 1, 2, 3], "adamw": [0, 1, 2, 3], "optimizer_param": [0, 1, 2, 3], "amsgrad": [0, 1, 2, 3], "warmup_factor": [0, 1, 2], "warmup_step": [0, 1, 2], "slurm": [0, 1, 3], "additional_paramet": [0, 1, 3], "constraint": [0, 1, 3], "volta32gb": [0, 1, 3], "cpus_per_task": [0, 1, 3], "9": [0, 1, 3], "folder": [0, 1, 3], "zitnick": [0, 1], "ocp_log": [0, 1], "4486283": [0, 1], "gpus_per_nod": [0, 1, 3], "job_id": [0, 1, 3], "job_nam": [0, 1, 3], "l6": [0, 1, 2], "m3": [0, 1], "lay20": [0, 1], "md": [0, 1, 2], "mem": [0, 1, 3], "480gb": [0, 1, 3], "node": [0, 1, 3, 4], "ntasks_per_nod": [0, 1, 3], "partit": [0, 1, 3], "4320": [0, 1, 3], "task": [0, 1, 2, 3], "trajectory_lmdb": [0, 1], "descript": [0, 1, 3], "regress": [0, 1, 3], "forc": [0, 1, 2, 3, 4], "dft": [0, 1, 3, 4], "eval_on_free_atom": [0, 1, 3], "grad_input": [0, 1, 3], "label": [0, 1, 3, 4], "metric": [0, 1, 3], "primary_metr": [0, 1, 3], "forces_ma": [0, 1, 3], "relax_opt": [0, 1], "alpha": [0, 1, 3], "70": [0, 1, 3], "damp": [0, 1], "maxstep": [0, 1], "04": [0, 1, 3], "memori": [0, 1, 2], "50": [0, 1, 3, 4], "name": [0, 1, 2, 3], "lbfg": [0, 1], "traj_dir": [0, 1], "traj_id": [0, 1], "relaxation_step": [0, 1], "200": [0, 1, 3], "train_on_free_atom": [0, 1, 3], "type": [0, 1, 3], "write_po": [0, 1], "trainer": [0, 1, 2, 3], "setup": [0, 2, 3, 4], "t0": [0, 1, 3], "_h": 0, "opt": [0, 1], "test": [0, 2], "traj": 0, "fmax": [0, 1, 3], "05": [0, 1, 3], "elaps": [0, 1, 3], "1f": [0, 3], "second": [0, 1, 3, 4], "54": [0, 1, 3], "428364": 0, "4259": 0, "410252": 0, "4044": 0, "305859": 0, "1983": 0, "295313": 0, "2380": 0, "55": [0, 3], "289260": 0, "2354": 0, "5": [0, 1, 2, 3, 4], "280001": 0, "1566": 0, "275805": 0, "0654": 0, "7": [0, 1, 3], "274644": 0, "0778": 0, "270579": 0, "0838": 0, "56": [0, 1, 3], "273369": 0, "0870": 0, "272944": 0, "0801": 0, "11": [0, 1, 3], "275774": 0, "0465": 0, "With": 0, "pretti": [0, 1], "quickli": 0, "much": 0, "slower": 0, "principl": 0, "take": [0, 3, 4], "hour": 0, "though": [0, 1], "leav": 0, "later": 0, "exercis": 0, "For": [0, 1, 3], "first": [0, 1, 3, 4], "analysi": 0, "read": [0, 2, 3], "our": 0, "open": [0, 1, 2, 3, 4], "rb": [0, 3], "symbol": [0, 1, 2, 3], "cupd3": 0, "pbc": [0, 1, 2, 3], "91276645": 0, "singlepointdftcalcul": 0, "src_id": 0, "349719": 0, "pd3ag": 0, "02885979": 0, "345911": 0, "scpd3": 0, "04684963": 0, "initial_charg": 0, "initial_magmom": 0, "momenta": 0, "tag": [0, 3], "singlepointcalcul": [0, 2, 3], "mp": 0, "2677": 0, "mo3pd": 0, "96898192": 0, "1186014": 0, "ag3pd": 0, "14093081": 0, "348629": 0, "ag3cu": 0, "09439099": 0, "343006": 0, "ag3mo": 0, "1665424": 0, "349813": 0, "agcu3": 0, "82618693": 0, "347528": 0, "cu3ru": 0, "72399424": 0, "344251": 0, "pdta3": 0, "13568646": 0, "343394": 0, "agmo3": 0, "00594441": 0, "344635": 0, "mo3ru": 0, "95617571": 0, "344237": 0, "mopd3": 0, "96059535": 0, "346818": 0, "pd3ru": 0, "93112559": 0, "349496": 0, "pd3ta": 0, "9907085": 0, "343615": 0, "moru3": 0, "85915122": 0, "348366": 0, "agta3": 0, "1730103": 0, "345352": 0, "auhf3": 0, "36653536": 0, "346653": 0, "aghf3": 0, "39618436": 0, "materi": [0, 3, 4], "consid": [0, 1], "next": [0, 3], "extract": 0, "src": [0, 2, 3], "bulk_id": 0, "row": [0, 3], "theori": [0, 1, 4], "would": [0, 1], "These": [0, 1, 2, 4], "embarrassingli": 0, "parallel": [0, 4], "launch": 0, "wai": [0, 3], "speed": 0, "thing": [0, 4], "up": [0, 1], "watch": 0, "don": [0, 1, 3], "t": [0, 1, 3], "exce": 0, "avail": 0, "ram": 0, "which": [0, 1, 3, 4], "caus": [0, 3], "jupyt": [0, 4], "kernel": 0, "crash": 0, "save": [0, 3], "analyz": 0, "quit": 0, "consum": 0, "tqdm": [0, 1], "tinit": 0, "establish": 0, "heuristic_adslabs_h": 0, "heuristic_adslabs_nnh": 0, "_nnh": 0, "idx": [0, 3], "logfil": [0, 1], "00": [0, 1, 3], "349719_h": 0, "349719_nnh": 0, "14": [0, 3], "02": [0, 3], "28": [0, 3], "44": [0, 1, 3], "31": [0, 3], "148": [0, 3], "41": [0, 3], "345911_h": 0, "345911_nnh": 0, "03": [0, 1, 2, 3], "43": [0, 3], "152": [0, 3], "2677_h": 0, "2677_nnh": 0, "06": [0, 3], "53": [0, 3], "35": [0, 3], "27": [0, 3], "132": [0, 3], "95": [0, 3], "1186014_h": 0, "1186014_nnh": 0, "21": [0, 1, 3], "09": [0, 3], "22": [0, 3], "34": [0, 3], "139": [0, 3], "38": [0, 1, 3], "343039_h": 0, "343039_nnh": 0, "26": [0, 3], "29": [0, 3], "51": [0, 3], "127": [0, 3], "96": [0, 3], "348629_h": 0, "348629_nnh": 0, "32": [0, 3], "25": [0, 1, 2, 3], "59": [0, 3], "119": [0, 3], "92": [0, 3], "343006_h": 0, "343006_nnh": 0, "46": [0, 3], "23": [0, 1, 3], "117": [0, 3], "349813_h": 0, "349813_nnh": 0, "42": [0, 3], "347528_h": 0, "347528_nnh": 0, "47": [0, 1, 3], "49": [0, 3], "136": [0, 3], "97": [0, 3], "344251_h": 0, "344251_nnh": 0, "48": [0, 1, 3], "30": [0, 3], "130": [0, 3], "08": [0, 1, 3], "343394_h": 0, "343394_nnh": 0, "58": [0, 1, 2, 3], "18": [0, 1, 3], "39": [0, 1, 3], "344635_h": 0, "344635_nnh": 0, "15": [0, 3, 4], "63": [0, 3], "147": [0, 3], "344237_h": 0, "344237_nnh": 0, "346818_h": 0, "346818_nnh": 0, "74": [0, 3], "153": [0, 3], "349496_h": 0, "349496_nnh": 0, "79": [0, 3], "40": [0, 3], "343615_h": 0, "343615_nnh": 0, "84": [0, 3], "158": [0, 3], "57": [0, 3], "348366_h": 0, "348366_nnh": 0, "89": [0, 3], "345352_h": 0, "345352_nnh": 0, "141": [0, 3], "346653_h": 0, "346653_nnh": 0, "140": [0, 3], "2662": 0, "As": 0, "desorb": 0, "disassoci": 0, "intercal": 0, "chang": 0, "becaus": [0, 1], "affect": 0, "referenc": [0, 1], "scheme": 0, "mai": [0, 1], "mean": [0, 3], "think": 0, "e": [0, 3], "g": 0, "aren": 0, "includ": [0, 1, 2, 3, 4], "contribut": 0, "other": [0, 1, 4], "like": [0, 1, 3], "desorpt": 0, "dissoci": [0, 1], "reconstruct": 0, "suppli": 0, "well": [0, 4], "necessari": [0, 2], "when": [0, 3], "sp": 0, "rx": 0, "sinc": [0, 1, 3], "ommit": 0, "detector": 0, "instead": 0, "initi": [0, 1], "after": 0, "latter": 0, "over": [0, 4], "min_": 0, "file_out": 0, "ad": [0, 1], "split": 0, "rx_id": 0, "anomol": 0, "get_tag": 0, "anom": 0, "is_adsorbate_dissoci": 0, "is_adsorbate_desorb": 0, "has_surface_chang": 0, "is_adsorbate_intercal": 0, "rx_energi": 0, "get_potential_energi": [0, 1, 3], "append": [0, 2], "relaxation_idx": 0, "relaxed_atom": 0, "relaxed_energy_ml": 0, "df": 0, "datafram": 0, "copi": [0, 2, 3], "reset_index": 0, "min": [0, 3], "tolist": 0, "min_e_ml": 0, "df_h": 0, "df_nnh": 0, "df_flat": 0, "merg": 0, "add": [0, 1], "literature_data": 0, "df_all": 0, "ax1": 0, "ax2": 0, "sharei": 0, "set_figheight": 0, "x": [0, 1], "min_e_ml_x": 0, "y": [0, 1], "e_lit_h": 0, "set_titl": 0, "k": [0, 1, 3], "linewidth": 0, "slope": 0, "intercept": 0, "r": [0, 1, 3], "p": [0, 3], "se": 0, "legend": [0, 1, 3], "2f": 0, "sq": 0, "loc": [0, 3], "upper": 0, "left": [0, 3], "scatter": 0, "axi": 0, "squar": 0, "set_xlim": 0, "set_ylim": 0, "set_xlabel": 0, "de": 0, "ev": [0, 1, 2, 3], "set_ylabel": 0, "min_e_ml_i": 0, "e_lit_nnh": 0, "set_figwidth": 0, "comp": 0, "composit": [0, 3, 4], "c": [0, 1, 3], "txt": [0, 3], "annot": 0, "b": [0, 1], "introduc": [1, 4], "start": [1, 3, 4], "simpl": [1, 3, 4], "adsorb": [1, 4], "where": [1, 4], "specifi": [1, 3], "conceptu": 1, "densiti": [1, 3, 4], "function": [1, 3, 4], "slab": 1, "surfac": 1, "an": [1, 2, 3, 4], "run": [1, 4], "relax": [1, 3, 4], "get": [1, 3], "state": [1, 3, 4], "care": 1, "combin": [1, 3], "return": 1, "total": [1, 3], "directli": 1, "know": 1, "than": [1, 3], "might": 1, "exampl": [1, 3], "oxygen": [1, 2], "convention": 1, "o2": [1, 2], "o": [1, 2, 3], "done": [1, 2, 3], "co": 1, "z": 1, "h2": 1, "h2o": 1, "w": 1, "n2": 1, "cxhyoznw": 1, "end": 1, "altern": 1, "through": [1, 3], "thermodynam": 1, "cycl": 1, "rh1": 1, "below": 1, "rh2": 1, "re1": [1, 2], "re2": 1, "direct": 1, "2o2": 1, "base": [1, 2, 3], "atct": 1, "anl": 1, "gov": 1, "thermochem": 1, "version": 1, "118": [1, 3], "speci": 1, "species_numb": 1, "986": 1, "format": 1, "water": 1, "standard": 1, "could": [1, 3, 4], "also": [1, 3, 4], "current": [1, 3, 4], "art": [1, 4], "alreadi": [1, 3], "request": [1, 3], "exist": [1, 3], "url": [1, 3], "dl": [1, 3], "fbaipublicfil": [1, 3], "com": [1, 3], "opencatalystproject": [1, 3], "2023_03": 1, "s2ef": [1, 2, 3], "wb": [1, 2, 3], "content": [1, 3], "output": [1, 3, 4], "somewhat": [1, 3], "verbos": 1, "debug": 1, "purpos": [1, 4], "expandus": [1, 3], "result": [1, 3], "all": [1, 2, 3, 4], "trajectori": [1, 3], "build": [1, 3, 4], "modul": 1, "experiment": 1, "lattic": 1, "constant": 1, "default": [1, 3], "error": [1, 3], "few": [1, 4], "percent": 1, "constrain": 1, "ani": [1, 3], "layer": 1, "fcc111": 1, "add_adsorb": 1, "size": [1, 3, 4], "vacuum": 1, "height": 1, "posit": [1, 2, 3], "fcc": [1, 2], "set_calcul": [1, 2, 3], "slab_": 1, "749174": 1, "6849": 1, "540854": 1, "9695": 1, "353706": 1, "7205": 1, "275858": 1, "7986": 1, "855154": 1, "6865": 1, "808235": 1, "4950": 1, "778811": 1, "6077": 1, "769219": 1, "7377": 1, "750103": 1, "5009": 1, "740156": 1, "1215": 1, "733541": 1, "0419": 1, "2964589285850523": 1, "good": [1, 3], "practic": [1, 4], "your": [1, 2, 3, 4], "make": [1, 2, 4], "expect": 1, "plot": [1, 3], "rotat": [1, 4], "90x": 1, "did": 1, "paper": [1, 3], "111": [1, 3], "264": [1, 3], "convert": [1, 2], "d": [1, 2, 3], "expt": 1, "compar": [1, 3], "68": [1, 3], "account": 1, "biggest": 1, "due": 1, "exchang": 1, "pbe": [1, 3], "wa": [1, 3, 4], "train": 1, "rpbe": [1, 3], "addit": [1, 3], "experi": [1, 4], "tend": 1, "systemat": 1, "calibr": 1, "especi": 1, "augment": 1, "own": [1, 4], "explor": [1, 3, 4], "effect": 1, "try": 1, "top": 1, "xu": 1, "kitchin": [1, 3], "j": [1, 3], "2014": 1, "probe": 1, "configur": [1, 4], "late": 1, "transit": 1, "metal": [1, 2], "phy": 1, "chem": 1, "25597": 1, "25602": 1, "dx": [1, 3], "jp508805h": 1, "support": [1, 3], "work": [1, 3, 4], "re3": [1, 2], "store": [1, 3, 4], "subtl": 1, "stoichiometri": 1, "normal": [1, 3], "ml": 1, "json": [1, 2, 3], "edata": [1, 2], "sdata": [1, 2], "263842000000002": 1, "si": 1, "sfcc": 1, "po": [1, 2], "nO": 1, "607977": 1, "3249": 1, "614224": 1, "2869": 1, "597037": 1, "0965": 1, "605701": 1, "0853": 1, "594046": 1, "0805": 1, "596878": 1, "0806": 1, "595877": 1, "1267": 1, "595115": 1, "0789": 1, "588692": 1, "0252": 1, "021307990550994": 1, "portion": 1, "figur": [1, 3], "hcp": 1, "highli": 1, "similar": 1, "At": 1, "higher": 1, "agreement": [1, 3], "extrapol": 1, "fine": [1, 4], "tune": [1, 4], "refdata": 1, "cu": [1, 2], "ag": [1, 2, 3], "rh": [1, 2], "ir": [1, 2], "entri": 1, "none": [1, 3], "suppress": 1, "01": [1, 3], "08it": 1, "30it": [1, 3], "28it": [1, 3], "11it": 1, "12it": 1, "59it": [1, 3], "61it": 1, "64729642868042": 1, "typic": [1, 4], "deviat": 1, "xlabel": [1, 3], "ref": 1, "ylabel": [1, 3], "same": 1, "trend": 1, "fall": 1, "pariti": [1, 3], "weaker": 1, "bind": 1, "h_": 1, "rel": [1, 2, 3], "better": [1, 3], "complex": 1, "stabl": 1, "coverag": 2, "75": [2, 3], "au": 2, "rm": [2, 3], "fr": [2, 3], "singlepoint": [2, 3], "connect": [2, 3, 4], "struc": 2, "en": 2, "per": 2, "ocp": [2, 3, 4], "sym": 2, "y_relax": 2, "command": [2, 3], "om": [2, 3], "mambaus": 2, "us": [2, 3, 4], "m2": 2, "lay12": 2, "yml": [2, 3], "shutil": 2, "param": 2, "writefil": 2, "ase_db": [2, 3], "address": 2, "connect_arg": 2, "keyword": 2, "select_arg": 2, "select": [2, 4], "queri": 2, "a2g_arg": [2, 3], "r_energi": [2, 3], "r_forc": [2, 3], "must": [2, 3], "keep_in_memori": [2, 3], "keep": 2, "reduc": 2, "extrem": 2, "fast": 2, "feasibl": 2, "val": 2, "python": [2, 3], "env": 2, "script": [2, 4], "dataset_per_adsorb": 2, "licens": 2, "instal": [2, 3, 4], "doc": [2, 3], "ocp_model": [2, 3], "egg": 2, "info": [2, 3], "readm": 2, "pyproject": [2, 3], "toml": [2, 3], "yaml": 2, "dump": [2, 3], "cloader": [2, 3], "loader": [2, 3], "cdumper": [2, 3], "dumper": [2, 3], "updat": [2, 3], "dict": [2, 3], "ninclud": 2, "nmodel": 2, "256": [2, 3], "noptim": 2, "218750": 2, "281250": 2, "343750": 2, "ntask": 2, "ntrainer": 2, "del": [2, 3], "encod": [2, 3], "utf": [2, 3], "cat": [2, 3], "todo": 3, "remov": 3, "bash": 3, "git": 3, "clone": 3, "github": 3, "emsunshin": 3, "cd": 3, "pull": 3, "checkout": 3, "ase_datasets_bugfix": 3, "pip": 3, "rev": 3, "pars": 3, "head": 3, "date": 3, "branch": 3, "origin": 3, "obtain": 3, "depend": 3, "finish": 3, "statu": 3, "backend": 3, "build_edit": 3, "requir": 3, "edit": 3, "prepar": 3, "metadata": 3, "wheel": 3, "collect": 3, "packag": 3, "filenam": 3, "py3": 3, "whl": 3, "3335": 3, "sha256": 3, "272b159896a80099e9f985882b83d4c3a10eabd42f23e831d4e19bdfd238fa2b": 3, "directori": 3, "tmp": 3, "ephem": 3, "cach": 3, "5mbd3qa9": 3, "4b": 3, "3b": 3, "4e0bb17f5f6f297ada608943d3b4dbc2406c2ce5b7f15f99f5": 3, "successfulli": 3, "built": 3, "attempt": 3, "uninstal": 3, "999c1ac8d1863c2fb666b1b22a59e3fc29725b52": 3, "improv": 3, "pre": 3, "sever": [3, 4], "oxid": 3, "polymorph": 3, "come": 3, "bo2": 3, "epitaxi": 3, "growth": 3, "mehta": 3, "salvador": 3, "A": [3, 4], "2015": 3, "appl": 3, "mater": 3, "interfac": 3, "3630": 3, "3639": 3, "am4059149": 3, "equat": 3, "accord": 3, "gemnet": [3, 4], "oc": [3, 4], "oc20": 3, "oc22": 3, "483": 3, "seem": 3, "gnoc_oc22_oc20_all_s2ef": 3, "2022_09": 3, "embed": 3, "articl": 3, "dictionari": 3, "xc": 3, "eo": 3, "kei": 3, "string": 3, "third": 3, "indic": 3, "focu": [3, 4], "fourth": 3, "last": 3, "list": 3, "numpi": 3, "np": 3, "tio2": 3, "sno2": 3, "iro2": 3, "ruo2": 3, "vo2": 3, "rutil": 3, "pyrit": 3, "columbit": 3, "brookit": 3, "fluorit": 3, "anatas": 3, "specif": [3, 4], "recreat": 3, "shortli": 3, "incar": 3, "paramet": 3, "prec": 3, "isif": 3, "nband": 3, "ibrion": 3, "gga": 3, "pe": 3, "encut": 3, "520": 3, "ismear": 3, "sigma": 3, "001": 3, "nsw": 3, "represent": 3, "vasp": 3, "nenergi": 3, "nforc": 3, "aa": 3, "nstress": 3, "gpa": 3, "sxx": 3, "syi": 3, "szz": 3, "syz": 3, "sxz": 3, "sxy": 3, "nmagnet": 3, "moment": 3, "bohr": 3, "magneton": 3, "nthe": 3, "report": 3, "e_f": 3, "nvolum": 3, "ncoordin": 3, "nif": 3, "project": [3, 4], "form": 3, "ado": 3, "index": 3, "orbit": 3, "potcar": 3, "potpaw": 3, "0cf2ce56049ca395c567026b700ed66c94a85161": 3, "ti": 3, "51f7f05982d6b4052becc160375a8b8b670177a7": 3, "input": 3, "kpt": 3, "reciproc": 3, "lda": 3, "kpts_nintersect": 3, "gamma": 3, "3789762519649225": 3, "864091775985314": 3, "1894881259824612": 3, "432045887992657": 3, "3181554154438013": 3, "0608208365211214": 3, "5076435414262623": 3, "87133271053866": 3, "stress": 3, "496": 3, "18519999": 3, "502": 3, "82679392": 3, "volum": 3, "92019999999996": 3, "total_energi": 3, "230672": 3, "001264": 3, "fermi_level": 3, "retriev": 3, "set_tag": 3, "ti2o4": 3, "warn": 3, "root": 3, "unabl": 3, "otherwis": 3, "unrecogn": 3, "symmetric_edge_symmetr": 3, "999c1ac": 3, "gemnet_oc": 3, "silu": 3, "atom_edge_interact": 3, "atom_interact": 3, "cbf": 3, "spherical_harmon": 3, "cutoff_aeaint": 3, "cutoff_aint": 3, "cutoff_qint": 3, "direct_forc": 3, "edge_atom_interact": 3, "emb_size_aint_in": 3, "64": 3, "emb_size_aint_out": 3, "emb_size_atom": 3, "emb_size_cbf": 3, "emb_size_edg": 3, "512": 3, "emb_size_quad_in": 3, "emb_size_quad_out": 3, "emb_size_rbf": 3, "emb_size_sbf": 3, "emb_size_trip_in": 3, "emb_size_trip_out": 3, "envelop": 3, "expon": 3, "polynomi": 3, "extens": [3, 4], "forces_coupl": 3, "max_neighbors_aeaint": 3, "max_neighbors_aint": 3, "1000": 3, "max_neighbors_qint": 3, "num_after_skip": 3, "num_atom": 3, "num_atom_emb_lay": 3, "num_before_skip": 3, "num_block": 3, "num_concat": 3, "num_global_out_lay": 3, "num_output_afteratom": 3, "num_radi": 3, "num_spher": 3, "output_init": 3, "heorthogon": 3, "qint_tag": 3, "quad_interact": 3, "rbf": 3, "sbf": 3, "legendre_out": 3, "factor": 3, "load_balanc": 3, "atomwisel2": 3, "0005": 3, "80": 3, "patienc": 3, "schedul": 3, "reducelronplateau": 3, "weight_decai": 3, "abhshkdz": 3, "ocp_oct1_log": 3, "57632342": 3, "learnaccel": 3, "oc22_lmdb": 3, "loop": 3, "accumul": [3, 4], "eos_data": 3, "vol": 3, "get_volum": 3, "marker": 3, "els": 3, "center": 3, "bbox_to_anchor": 3, "ncol": 3, "ab": 3, "arrai": [3, 4], "3f": 3, "668": 3, "high": [3, 4], "valu": 3, "458": 3, "too": 3, "surpris": 3, "although": 3, "evid": 3, "issu": 3, "skew": 3, "offset": 3, "qualit": 3, "shape": 3, "larg": 3, "notabl": [3, 4], "pretrain": 3, "v": 3, "titl": 3, "savefig": 3, "png": 3, "close": 3, "contain": 3, "attach": 3, "clean": 3, "made": [3, 4], "formula": 3, "natom": 3, "charg": [3, 4], "mass": 3, "4s": 3, "sn2o4": 3, "unknown": 3, "359": 3, "045": 3, "ttt": 3, "258": 3, "000": 3, "301": 3, "416": 3, "853": 3, "025": 3, "66": 3, "526": 3, "199": 3, "010": 3, "794": 3, "419": 3, "006": 3, "71": 3, "062": 3, "534": 3, "011": 3, "73": 3, "330": 3, "562": 3, "029": 3, "598": 3, "518": 3, "033": 3, "77": 3, "866": 3, "415": 3, "266": 3, "82": 3, "402": 3, "083": 3, "017": 3, "670": 3, "sn4o8": 3, "81": 3, "424": 3, "012": 3, "473": 3, "602": 3, "832": 3, "437": 3, "005": 3, "121": 3, "620": 3, "83": 3, "015": 3, "125": 3, "766": 3, "599": 3, "047": 3, "129": 3, "912": 3, "831": 3, "081": 3, "058": 3, "898": 3, "138": 3, "204": 3, "805": 3, "142": 3, "350": 3, "586": 3, "002": 3, "146": 3, "262": 3, "150": 3, "642": 3, "851": 3, "013": 3, "154": 3, "788": 3, "295": 3, "three": [3, 4], "valid": 3, "shuffl": 3, "remain": 3, "overfit": 3, "choos": [3, 4], "integ": 3, "correspond": [3, 4], "randomli": 3, "new": [3, 4], "rng": 3, "default_rng": 3, "arang": 3, "296": 3, "271": 3, "101": 3, "261": 3, "194": 3, "133": 3, "267": 3, "162": 3, "76": 3, "214": 3, "246": 3, "243": 3, "293": 3, "90": 3, "185": 3, "281": 3, "189": 3, "280": 3, "69": 3, "218": 3, "292": 3, "93": 3, "253": 3, "270": 3, "65": 3, "169": 3, "198": 3, "52": 3, "62": 3, "269": 3, "222": 3, "144": 3, "237": 3, "226": 3, "166": 3, "286": 3, "254": 3, "170": 3, "181": 3, "99": 3, "228": 3, "145": 3, "244": 3, "279": 3, "223": 3, "186": 3, "248": 3, "192": 3, "233": 3, "277": 3, "282": 3, "240": 3, "105": 3, "221": 3, "116": 3, "245": 3, "149": 3, "61": 3, "85": 3, "135": 3, "274": 3, "294": 3, "272": 3, "165": 3, "102": 3, "263": 3, "257": 3, "172": 3, "182": 3, "206": 3, "220": 3, "151": 3, "203": 3, "113": 3, "208": 3, "167": 3, "78": 3, "287": 3, "108": 3, "193": 3, "67": 3, "249": 3, "173": 3, "60": 3, "250": 3, "229": 3, "212": 3, "190": 3, "180": 3, "291": 3, "159": 3, "33": 3, "156": 3, "157": 3, "231": 3, "174": 3, "122": 3, "288": 3, "131": 3, "109": 3, "163": 3, "210": 3, "175": 3, "236": 3, "87": 3, "107": 3, "255": 3, "290": 3, "217": 3, "260": 3, "289": 3, "179": 3, "202": 3, "197": 3, "211": 3, "86": 3, "177": 3, "187": 3, "215": 3, "219": 3, "230": 3, "259": 3, "252": 3, "234": 3, "205": 3, "45": 3, "120": 3, "273": 3, "115": 3, "171": 3, "124": 3, "104": 3, "91": 3, "242": 3, "207": 3, "88": 3, "201": 3, "143": 3, "112": 3, "227": 3, "94": 3, "216": 3, "268": 3, "188": 3, "278": 3, "72": 3, "155": 3, "232": 3, "126": 3, "178": 3, "225": 3, "285": 3, "239": 3, "251": 3, "224": 3, "184": 3, "123": 3, "168": 3, "283": 3, "265": 3, "247": 3, "235": 3, "209": 3, "106": 3, "213": 3, "275": 3, "161": 3, "110": 3, "191": 3, "241": 3, "196": 3, "183": 3, "103": 3, "176": 3, "284": 3, "276": 3, "164": 3, "114": 3, "238": 3, "195": 3, "98": 3, "137": 3, "train_end": 3, "int": 3, "test_end": 3, "_id": 3, "toatom": 3, "count": 3, "deriv": 3, "page": 3, "document": 3, "gemnet_oc_oc20_oc22": 3, "ocp_root": 3, "listdir": 3, "gemnet_oc_finetun": 3, "gemnet_oc_oc20_oc22_degen_edg": 3, "programmat": 3, "hand": [3, 4], "One": 3, "downsid": 3, "preserv": 3, "ok": 3, "ls": 3, "base_joint": 3, "anymor": 3, "abov": [3, 4], "str": 3, "absolut": 3, "determin": 3, "runyml": 3, "magic": 3, "test_dataset": 3, "val_dataset": 3, "batch": 3, "balanc": 3, "disabl": 3, "singl": 3, "gemnetoc": 3, "38864438": 3, "gradient": 3, "yet": 3, "overwrit": 3, "re": 3, "behavior": 3, "delet": 3, "scale_dict": 3, "forcesx_ma": 3, "36e": 3, "forcesy_ma": 3, "96e": 3, "forcesz_ma": 3, "91e": 3, "41e": 3, "forces_co": 3, "forces_magnitud": 3, "46e": 3, "energy_ma": 3, "energy_force_within_threshold": 3, "25e": 3, "loss": 3, "01e": 3, "lr": 3, "00e": 3, "epoch": 3, "67e": 3, "evalu": 3, "devic": 3, "35it": 3, "95it": 3, "0248": 3, "0188": 3, "0250": 3, "0229": 3, "0523": 3, "0356": 3, "2334": 3, "0000": 3, "2262": 3, "51it": 3, "forces_train": 3, "visibledeprecationwarn": 3, "ndarrai": 3, "rag": 3, "nest": 3, "sequenc": 3, "tupl": 3, "length": 3, "deprec": 3, "meant": 3, "dtype": 3, "base_train": 3, "gather_result": 3, "s2ef_predict": 3, "npz": 3, "21e": 3, "98e": 3, "37e": 3, "19e": 3, "17e": 3, "09e": 3, "07e": 3, "16e": 3, "33e": 3, "87e": 3, "26e": 3, "71e": 3, "40e": 3, "80e": 3, "54e": 3, "74e": 3, "21it": 3, "10it": 3, "0157": 3, "0187": 3, "0142": 3, "0162": 3, "0960": 3, "0176": 3, "9279": 3, "9632": 3, "14e": 3, "62e": 3, "89e": 3, "13e": 3, "53e": 3, "59e": 3, "31it": 3, "88it": 3, "0118": 3, "0151": 3, "0137": 3, "0135": 3, "0156": 3, "6555": 3, "6985": 3, "69e": 3, "42e": 3, "51e": 3, "81e": 3, "75e": 3, "78e": 3, "11e": 3, "05e": 3, "08e": 3, "20e": 3, "10e": 3, "17it": 3, "76it": 3, "0143": 3, "0141": 3, "0120": 3, "0440": 3, "0145": 3, "7120": 3, "0333": 3, "7448": 3, "33it": 3, "46it": 3, "30e": 3, "29e": 3, "47e": 3, "39e": 3, "43e": 3, "26it": 3, "82it": 3, "0161": 3, "0642": 3, "0226": 3, "9876": 3, "0284": 3, "82e": 3, "66e": 3, "65e": 3, "88e": 3, "06e": 3, "50e": 3, "22e": 3, "04e": 3, "18it": 3, "74it": 3, "0110": 3, "0117": 3, "0104": 3, "0392": 3, "7074": 3, "7499": 3, "64e": 3, "03e": 3, "38e": 3, "68it": 3, "0127": 3, "0111": 3, "0125": 3, "0490": 3, "0138": 3, "6282": 3, "0667": 3, "6713": 3, "12e": 3, "44e": 3, "28e": 3, "83e": 3, "85e": 3, "24it": 3, "90it": 3, "0095": 3, "0112": 3, "0074": 3, "0094": 3, "0569": 3, "7743": 3, "7889": 3, "45e": 3, "40it": 3, "92it": 3, "0091": 3, "0103": 3, "0080": 3, "0957": 3, "0150": 3, "8108": 3, "8181": 3, "60e": 3, "84e": 3, "31e": 3, "56e": 3, "34e": 3, "37it": 3, "87it": 3, "0096": 3, "0484": 3, "0718": 3, "0969": 3, "24e": 3, "15e": 3, "18e": 3, "70it": 3, "0087": 3, "0102": 3, "0070": 3, "0086": 3, "0830": 3, "0133": 3, "5211": 3, "5156": 3, "27e": 3, "32e": 3, "70e": 3, "23e": 3, "61e": 3, "93e": 3, "49e": 3, "20it": 3, "79it": 3, "0090": 3, "0106": 3, "0072": 3, "0089": 3, "1007": 3, "3148": 3, "3256": 3, "58e": 3, "92e": 3, "90e": 3, "39it": 3, "73it": 3, "0105": 3, "0073": 3, "0841": 3, "0130": 3, "5096": 3, "5373": 3, "63e": 3, "55e": 3, "22it": 3, "0093": 3, "0078": 3, "0092": 3, "0652": 3, "4586": 3, "4827": 3, "86e": 3, "0083": 3, "0947": 3, "7256": 3, "7592": 3, "48e": 3, "19it": 3, "80it": 3, "0890": 3, "0146": 3, "8004": 3, "8180": 3, "94e": 3, "73e": 3, "0088": 3, "7150": 3, "7347": 3, "27it": 3, "0076": 3, "0849": 3, "0147": 3, "5842": 3, "6027": 3, "99e": 3, "52e": 3, "86it": 3, "0077": 3, "0047": 3, "0144": 3, "6435": 3, "6733": 3, "76e": 3, "79e": 3, "0589": 3, "4247": 3, "4514": 3, "72e": 3, "0354": 3, "0128": 3, "3579": 3, "3861": 3, "97e": 3, "0108": 3, "0098": 3, "0742": 3, "0134": 3, "4150": 3, "4431": 3, "77e": 3, "83it": 3, "0079": 3, "1367": 3, "4822": 3, "5087": 3, "57e": 3, "23it": 3, "81it": 3, "0097": 3, "0081": 3, "0288": 3, "0131": 3, "7660": 3, "7910": 3, "34it": 3, "85it": 3, "0648": 3, "0132": 3, "5268": 3, "5585": 3, "38it": 3, "0101": 3, "0183": 3, "3935": 3, "4175": 3, "0717": 3, "3967": 3, "4230": 3, "95e": 3, "84it": 3, "0885": 3, "0139": 3, "5488": 3, "5729": 3, "0379": 3, "8412": 3, "8605": 3, "29it": 3, "0075": 3, "0630": 3, "0136": 3, "2637": 3, "2897": 3, "52it": 3, "0109": 3, "0099": 3, "0710": 3, "0129": 3, "4263": 3, "4539": 3, "01it": 3, "72it": 3, "2001": 3, "5873": 3, "6084": 3, "02e": 3, "0085": 3, "0814": 3, "5983": 3, "6217": 3, "35e": 3, "0999": 3, "9882": 3, "0051": 3, "1089": 3, "4471": 3, "4737": 3, "68e": 3, "69it": 3, "1050": 3, "2846": 3, "3146": 3, "36it": 3, "0082": 3, "1278": 3, "3031": 3, "3320": 3, "0107": 3, "0521": 3, "3316": 3, "3602": 3, "2322": 3, "13it": 3, "0065": 3, "2210": 3, "2487": 3, "1085": 3, "2666": 3, "2939": 3, "0100": 3, "1912": 3, "2207": 3, "77it": 3, "0715": 3, "2541": 3, "2812": 3, "0249": 3, "2228": 3, "2492": 3, "0740": 3, "1694": 3, "1981": 3, "07it": 3, "0196": 3, "2046": 3, "2333": 3, "0657": 3, "1338": 3, "1636": 3, "0462": 3, "1587": 3, "1882": 3, "0516": 3, "1773": 3, "2044": 3, "0564": 3, "1186": 3, "1459": 3, "94it": 3, "0332": 3, "1799": 3, "2098": 3, "0218": 3, "1397": 3, "1692": 3, "0863": 3, "2570": 3, "2870": 3, "0882": 3, "1358": 3, "1648": 3, "0676": 3, "1081": 3, "1667": 3, "1378": 3, "49it": 3, "0113": 3, "1148": 3, "1455": 3, "41it": 3, "0084": 3, "0409": 3, "0140": 3, "2301": 3, "1333": 3, "2572": 3, "89it": 3, "0602": 3, "1178": 3, "1484": 3, "0114": 3, "0738": 3, "1231": 3, "1543": 3, "32it": 3, "0475": 3, "1588": 3, "1871": 3, "0037": 3, "2454": 3, "2736": 3, "45it": 3, "0311": 3, "1317": 3, "1621": 3, "1156": 3, "0987": 3, "1293": 3, "25it": 3, "78it": 3, "0852": 3, "1275": 3, "1573": 3, "1247": 3, "1556": 3, "0528": 3, "1290": 3, "1579": 3, "0932": 3, "2000": 3, "1228": 3, "09it": 3, "71it": 3, "0191": 3, "1149": 3, "2667": 3, "1445": 3, "0302": 3, "1068": 3, "1366": 3, "0522": 3, "1191": 3, "1476": 3, "98it": 3, "0536": 3, "0986": 3, "1285": 3, "1091": 3, "1389": 3, "0297": 3, "0786": 3, "0746": 3, "1045": 3, "0210": 3, "0843": 3, "1141": 3, "93it": 3, "0124": 3, "0724": 3, "1020": 3, "0199": 3, "0874": 3, "1166": 3, "16it": 3, "75it": 3, "0981": 3, "1276": 3, "1023": 3, "1043": 3, "1336": 3, "taken": 3, "382": 3, "3374297618866": 3, "stamp": 3, "someth": 3, "timestamp": 3, "pick": 3, "sort": 3, "newckpt": 3, "newcalc": 3, "009": 3, "substanti": [3, 4], "term": 3, "still": 3, "perfect": 3, "curv": 3, "closer": 3, "togeth": 3, "finetun": 3, "continu": 3, "tighter": 3, "criteria": 3, "weight": 3, "1m": 4, "wide": 4, "applic": 4, "properti": 4, "acceler": 4, "workshop": 4, "catalyst": 4, "showcas": 4, "varieti": 4, "explain": 4, "environ": 4, "discuss": 4, "limit": 4, "opportun": 4, "futur": 4, "research": 4, "particip": 4, "laptop": 4, "internet": 4, "capabl": 4, "access": 4, "via": 4, "mainstai": 4, "molecular": 4, "its": 4, "cost": 4, "past": 4, "decad": 4, "increasingli": 4, "surrog": 4, "supplement": 4, "call": 4, "mlp": 4, "earli": 4, "dai": 4, "neural": 4, "network": 4, "were": 4, "cartesian": 4, "coordin": 4, "system": 4, "featur": 4, "success": 4, "lack": 4, "physic": 4, "invari": 4, "translat": 4, "permut": 4, "being": 4, "investig": 4, "year": 4, "ago": 4, "symmetri": 4, "develop": 4, "intens": 4, "had": 4, "enabl": 4, "progress": 4, "vector": 4, "quadrat": 4, "element": 4, "usual": 4, "implicit": 4, "transferr": 4, "craft": 4, "adapt": 4, "thu": 4, "judgement": 4, "while": 4, "progess": 4, "mitig": 4, "overtaken": 4, "method": 4, "todai": 4, "convolut": 4, "repres": 4, "edg": 4, "roughli": 4, "interact": 4, "bond": 4, "learnabl": 4, "oper": 4, "pair": 4, "triplet": 4, "quadruplet": 4, "messag": 4, "central": 4, "studi": 4, "handl": 4, "began": 4, "appear": 4, "regularli": 4, "literatur": 4, "around": 4, "2016": 4, "consist": 4, "umbrella": 4, "architectur": 4, "associ": 4, "cgcnn": 4, "arxiv": 4, "schnet": 4, "dimenet": 4, "forcenet": 4, "spinconv": 4, "dt": 4, "painn": 4, "scn": 4, "bader": 4, "shell": 4, "compat": 4, "notebook": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"us": [0, 1], "ocp": [0, 1, 5], "enumer": 0, "adsorb": 0, "catalyst": 0, "surfac": 0, "introduct": [0, 1, 4], "slab": 0, "configur": [0, 3], "run": [0, 3], "relax": 0, "work": 0, "out": 0, "singl": 0, "exampl": 0, "an": 0, "ml": 0, "all": 0, "system": 0, "pars": 0, "trajectori": 0, "post": 0, "process": 0, "make": [0, 3], "pariti": 0, "plot": 0, "valu": 0, "obtain": 0, "v": 0, "report": 0, "paper": 0, "figur": 0, "6b": 0, "compar": 0, "literatur": 0, "result": 0, "molecular": 1, "simul": [1, 4], "calcul": [1, 5], "adsorpt": 1, "energi": 1, "exercis": 1, "coverag": 1, "depend": 1, "site": 1, "correl": 1, "next": 1, "step": 1, "creat": 2, "train": [2, 3, 4], "data": 2, "fine": 3, "tune": 3, "model": [3, 4], "checkpoint": [3, 4], "test": 3, "val": 3, "split": 3, "set": 3, "up": 3, "yaml": 3, "file": 3, "job": 3, "util": 4, "larg": 4, "graph": 4, "base": 4, "pre": 4, "machin": 4, "learn": 4, "potenti": 4, "atomist": 4, "abstract": 4, "dataset": 4, "task": 4, "goal": 4, "thi": 4, "tutori": 4, "ASE": 5, "compat": 5}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})