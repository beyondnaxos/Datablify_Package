import React from 'react'
import { storiesOf } from '@storybook/react'
import './styles.css'

import { Datablify } from '../components/Datablify'

const stories = storiesOf('Datablify', module)

stories.add('Default', () => {
    const data = [
        {
          firstName: "Patrick",
          lastName: "Bouboulina",
          startDate: "2022-01-01",
          department: "Info",
          dateOfBirth: "1992-01-01",
          street: "189 rue de la Ventouse",
          city: "Bouba-Ville",
          state: "France",
          zipCode: "45650",
        },
        // Ajoutez plus de lignes de données ici...
      ];
    
      return (
        <div>
          <h1>Exemple de tableau</h1>
          <Datablify data={data} />
        </div>
      );
})
