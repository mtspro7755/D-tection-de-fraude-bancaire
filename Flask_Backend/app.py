from flask import Flask, request, jsonify
from datetime import datetime
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# Simule une base temporaire en mémoire
historique_predictions = []

# Charger le modèle et scaler
model = joblib.load("modele_fraude.pkl")
scaler = joblib.load("mon_scaler.pkl")
MODEL_VERSION = "v1.0.0"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = np.array(data['features']).reshape(1, -1)

    # Appliquer le scaler si nécessaire
    features_scaled = scaler.transform(features)

    # Prédiction brute (0 ou 1) et score (probabilité)
    prediction = model.predict(features_scaled)[0]
    proba = model.predict_proba(features_scaled)[0][1]  # proba de classe 1 (fraude)

    message = "Fraude détectée" if prediction == 1 else "Transaction normale"

    response = {
        "message": message,
        "prediction": int(prediction),
        "score": round(float(proba), 4),
        "model_version": MODEL_VERSION,
        "timestamp": datetime.utcnow().isoformat() + "Z"
    }

    # Enregistrer dans l'historique
    historique_predictions.append(response)

    return jsonify(response)


@app.route('/history', methods=['GET'])
def get_history():
    return jsonify(historique_predictions)

if __name__ == '__main__':
    app.run(debug=True)