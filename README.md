
# 📌 Détection de Fraude Bancaire avec IA

Ce projet utilise un modèle de Machine Learning pour détecter automatiquement les fraudes bancaires. Il comprend :

- 🔍 Un **backend Flask** pour les prédictions
- 🖥️ Un **frontend Angular** moderne et responsive
- 📊 Des visualisations (historique + graphique)

---

## 🧠 Fonctionnalités

- Prédiction de fraude en temps réel via formulaire
- Historique des prédictions stockées et affichées
- Graphique en doughnut des cas détectés
- Interface web dynamique avec Bootstrap

---

## 🚀 Démarrage du projet

### 📂 1. Cloner le projet

```bash
git clone https://github.com/ton-utilisateur/detection-fraude.git
cd detection-fraude
```

### ⚙️ 2. Lancer le backend Flask

```bash
cd Flask_Backend
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate sous Windows
pip install -r requirements.txt
python app.py
```

- Le backend tourne sur `http://127.0.0.1:5000`

### 🌐 3. Lancer le frontend Angular

```bash
cd Angular_Frontend
npm install
ng serve
```

- L’interface est accessible sur `http://localhost:4200`

---

## 📦 Technologies utilisées

| Technologie | Rôle |
|-------------|------|
| Python      | Entraînement et API |
| Flask       | Backend REST |
| Angular     | Frontend SPA |
| Bootstrap   | Design responsive |
| Chart.js    | Graphique historique |
| HTML/CSS    | Structure et styles |

---

## 👨‍💻 Auteur

Momar Talla Salla  
Projet réalisé dans le cadre du M2 Informatique à l'Institut Polytechnique de Saint-Louis – UGB.
