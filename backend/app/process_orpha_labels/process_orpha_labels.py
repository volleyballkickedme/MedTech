import json
import app.constants as constants

class orpha_labels:
    def __init__(self):
        self.orpha_dict = orpha_labels.load_orpha_ids()

    @staticmethod
    def load_orphanet_data():
        with open(constants.ORPHA_LABELS_DIR, 'r') as f:
            labels = json.load(f)
        # Assuming labels is a list of dictionaries
        #for key, value in labels.items():
        #    value['label'] = re.sub(r'\W+', ' ', value['label'])
        return labels
    
    @staticmethod
    def load_orpha_ids():
        labels = orpha_labels.load_orphanet_data()
        orpha_dict = {}
        # Example: orpha_data might have a list of terms
        """
        for term in orpha_data:
            orpha_id = term
            label = orpha_data[term]["label"]
            synonyms = orpha_data[term].get("syns", [])
            orpha_dict[orpha_id] = {
                "label": label,
                "synonyms": synonyms
            }
            """
        for term in labels:
            orpha_id = term
            label = labels[term]["label"]
            orpha_dict[label] = orpha_id
            synonyms = labels[term].get("syns", [])
            for synonym in synonyms:
                orpha_dict[synonym] = orpha_id

        return orpha_dict
    
    def get_orpha_id(self, label):
        return self.orpha_dict.get(label, "No Orphanet ID found for this label.")
    
    def get_labels(self):
        return str(self.orpha_dict.keys())

    
def main():
    orpha_labels.load_orpha_ids()

if __name__ == "__main__":
    main()
