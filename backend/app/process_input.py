import app.process_orpha_labels.process_orpha_labels as orpha_labels
from thefuzz import process
import app.model.mistral as mistral
import os

def process_diseases(model, input):
    diseases = []
    try:
        labels = orpha_labels.orpha_labels()
    except Exception as e:
        print(f"Warning: Could not load Orpha labels: {e}")
        labels = None
    
    # using model, get diseases based on input
    response = model.ask(input)

    # for each disease in output:
    # match with closest hpo term
    for line in response.split('\n'):
        if line.strip():  # Only process non-empty lines
            disease = {'name': line.strip()}
            if labels:
                best_match = process.extractOne(line, labels.get_labels())
                if best_match and best_match[1] > 95:  # threshold for fuzzy matching
                    orphaid = labels.get(best_match[0])
                    disease['OrphaID'] = orphaid
            diseases.append(disease)
    
    print(diseases)
    return diseases

def main():
    print("Running main")
    model = mistral.mistral()
    diseases = process_diseases(model, input)
    print(diseases)

if __name__ == "__main__":
    main()