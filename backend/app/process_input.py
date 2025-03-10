import process_orpha_labels.process_orpha_labels as orpha_labels
from thefuzz import process
import model.mistral as mistral

def process_diseases(model, input):
    diseases = []
    labels = orpha_labels.orpha_labels()
    # using model, get diseases based on input
    response = model.ask(input)

    # for each disease in output:
    # match with closest hpo term
    for line in response.split('\n'):
        disease = {'name': line}
        best_match = process.extractOne(line, labels.get_labels())
        if best_match and best_match[1] > 95:  # threshold for fuzzy matching
            orphaid = labels.get(best_match[0])
            disease['OrphaID'] = orphaid
            diseases.append(disease)
        else:
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