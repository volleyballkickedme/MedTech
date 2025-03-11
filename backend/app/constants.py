import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LABELS_DIR = os.path.join(BASE_DIR, "labels")
ORPHA_LABELS_DIR = os.path.join(LABELS_DIR, "orphanet_labels.json")
INDEX_DIR = os.path.join(BASE_DIR, "ontology_index")
HPO_INDEX_DIR = os.path.join(INDEX_DIR, "hp.index")
MONDO_INDEX_DIR = os.path.join(INDEX_DIR, "mondo.index")
