import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from "@ionic/react";
import "./BiorhythmCard.css";
import React from "react";
import "../App.css";
import dayjs from "dayjs"; 
import  {calculateBiorhythms} from "../calculations";
import BiorhythmChart from "./BiorhythmChart.jsx";
import { close } from "ionicons/icons";

function formatDate(isoString) {
  return dayjs(isoString).format("D MMM YYYY")
}

function BiorhythmCard({birthDate, targetDate}) {
  const {physical, emotional, intellectual} =  calculateBiorhythms(birthDate, targetDate);
    return (
        <div>
        <IonCard className="ion-text-center">
         <IonIcon icon={close} aria-hidden="true" />
         <IonCardHeader>
           <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
         </IonCardHeader>
         <IonCardContent>
           <BiorhythmChart birthDate={birthDate} targetDate={targetDate}/>
          <p className="physical">Physical: {physical.toFixed(3)}%</p>
          <p className="emotional">Emotional: {emotional.toFixed(3)}%</p>
          <p className="intellectual">Intellectual: {intellectual.toFixed(3)}%</p>
         </IonCardContent>
       </IonCard>
        </div>
    );
}

export default BiorhythmCard;
