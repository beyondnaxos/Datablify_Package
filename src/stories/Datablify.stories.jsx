import React from 'react'
import { storiesOf } from '@storybook/react'
import './styles.css'

import { Datablify } from '../components/Datablify'

const stories = storiesOf('Datablify', module)

stories.add('Default', () => <Datablify />)
