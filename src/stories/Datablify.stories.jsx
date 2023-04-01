import React from 'react'
import { storiesOf } from '@storybook/react'
import './styles.css'

import { Datablify } from '../components/Datablify'

const stories = storiesOf('Datablify', module)

stories.add('Default', () => {
  const categories = [
    'First Name',
    'Last Name',
    'Start Date',
    'Department',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
  ]

  const data = [
    {
      firstName: 'Patrick',
      lastName: 'Bouboulina',
      startDate: '2022-01-01',
      department: 'Info',
      dateOfBirth: '1992-01-01',
      street: '189 rue de la Ventouse',
      city: 'Bouba-Ville',
      state: 'France',
      zipCode: '45650',
    },
    {
      firstName: 'Lucie',
      lastName: 'Dupont',
      startDate: '2022-03-15',
      department: 'Marketing',
      dateOfBirth: '1993-06-05',
      street: '22 rue de la Paix',
      city: 'Paris',
      state: 'France',
      zipCode: '75008',
    },
    {
      firstName: 'Thomas',
      lastName: 'Martin',
      startDate: '2022-02-10',
      department: 'IT',
      dateOfBirth: '1985-11-17',
      street: '5 rue des Lilas',
      city: 'Lyon',
      state: 'France',
      zipCode: '69002',
    },
    {
      firstName: 'Emma',
      lastName: 'Leroux',
      startDate: '2022-05-03',
      department: 'Finance',
      dateOfBirth: '1990-08-20',
      street: '44 avenue des Champs-Elysées',
      city: 'Paris',
      state: 'France',
      zipCode: '75008',
    },
    {
      firstName: 'Nicolas',
      lastName: 'Durand',
      startDate: '2022-04-01',
      department: 'HR',
      dateOfBirth: '1987-03-10',
      street: '12 rue des Tulipes',
      city: 'Marseille',
      state: 'France',
      zipCode: '13000',
    },
    {
      firstName: 'Nicolas',
      lastName: 'Durand',
      startDate: '2022-04-01',
      department: 'HR',
      dateOfBirth: '1987-03-10',
      street: '12 rue des Tulipes',
      city: 'Marseille',
      state: 'France',
      zipCode: '13000',
    },
    {
      firstName: 'Nicolas',
      lastName: 'Durand',
      startDate: '2022-04-01',
      department: 'HR',
      dateOfBirth: '1987-03-10',
      street: '12 rue des Tulipes',
      city: 'Marseille',
      state: 'France',
      zipCode: '13000',
    },
    {
      firstName: 'Sophie',
      lastName: 'Leclerc',
      startDate: '2022-01-15',
      department: 'Marketing',
      dateOfBirth: '1995-02-22',
      street: '18 avenue du Général de Gaulle',
      city: 'Toulouse',
      state: 'France',
      zipCode: '31000',
    },
    {
      firstName: 'Julien',
      lastName: 'Rousseau',
      startDate: '2022-06-20',
      department: 'IT',
      dateOfBirth: '1988-12-14',
      street: '9 rue des Cerisiers',
      city: 'Nice',
      state: 'France',
      zipCode: '06000',
    },
    {
      firstName: 'Marie',
      lastName: 'Lecomte',
      startDate: '2022-03-01',
      department: 'Finance',
      dateOfBirth: '1994-09-18',
      street: '25 boulevard Victor Hugo',
      city: 'Lille',
      state: 'France',
      zipCode: '59000',
    },
    {
      firstName: 'Maxime',
      lastName: 'Garcia',
      startDate: '2022-08-15',
      department: 'HR',
      dateOfBirth: '1986-05-28',
      street: '37 rue Saint-Jacques',
      city: 'Rennes',
      state: 'France',
      zipCode: '35000',
    },
    {
      firstName: 'Laura',
      lastName: 'Moreau',
      startDate: '2022-07-10',
      department: 'Info',
      dateOfBirth: '1991-07-04',
      street: '14 rue de la Paix',
      city: 'Paris',
      state: 'France',
      zipCode: '75008',
    },
    {
      firstName: 'Léa',
      lastName: 'Dubois',
      startDate: '2022-09-01',
      department: 'Marketing',
      dateOfBirth: '1992-01-01',
      street: '189 rue de la Ventouse',
      city: 'Bouba-Ville',
      state: 'France',
      zipCode: '45650',
    },
  ]

  return (
    <div>
      <h1>Exemple de tableau</h1>
      <Datablify data={data} categories={categories} />
    </div>
  )
})
