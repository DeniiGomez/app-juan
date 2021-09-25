import React, {useContext} from 'react'

import { CareerContext } from '../../context/career/CareerContext'

import { List } from '../list/List'

export const Activity = () => {

  const{ activities } = useContext(CareerContext)

  return <List list={activities} />
}
