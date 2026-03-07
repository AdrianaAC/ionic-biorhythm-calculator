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

import React, { useState } from "react";
import "./App.css";
import BiorhythmCard from "./components/BiorhythmCard";
import {useLocalStorage} from "./hooks";

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
            onIonChange={(event) => setName(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Date of birth:</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target date:</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY"
            value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
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
