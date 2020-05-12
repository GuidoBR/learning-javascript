import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const CardExamples: React.FC = () => {
  return (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Casos Confirmados</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <h2>Total: 168.331</h2>  
          </IonCardContent>

          <IonCardContent>
            <h2>Mortes: 12.400</h2>  
          </IonCardContent>
        </IonCard>
  );
};

export default CardExamples;
