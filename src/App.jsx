import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
  IonInput,
} from "@ionic/react";

import React from "react";
import "./App.css";
import BiorhythmCard from "./components/BiorhythmCard.jsx";
import {useLocalStorage} from "./hooks";

function getDateValue(value) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return value ?? "";
}

function App() {
  const [birthDate, setBirthDate] = useLocalStorage("birthDate","");
  const [name, setName] = useLocalStorage("name","");
  const [targetDate, setTargetDate] = useLocalStorage("targetDate", new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Name:</IonLabel>
          <IonInput
            value={name}
            placeholder="Your name"
            onIonChange={(event) => setName(event.detail.value ?? "")}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Date of birth:</IonLabel>
          <IonDatetime
            presentation="date"
            value={birthDate}
            onIonChange={(event) => setBirthDate(getDateValue(event.detail.value))}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target date:</IonLabel>
          <IonDatetime
            presentation="date"
            value={targetDate}
            onIonChange={(event) => setTargetDate(getDateValue(event.detail.value))}
          />
        </IonItem>
        {birthDate && 
           <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        }
      </IonContent>
    </IonApp>
  );
}

export default App;

