import React, {useContext} from 'react'

import { CareerContext } from '../../context/career/CareerContext'

import { List } from '../list/List'

export const Job = () => {

  const{ jobs } = useContext(CareerContext)

  return <List list={jobs} />
}
