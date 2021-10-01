import React, { useReducer } from 'react'
import CareerReducer from './CareerReducer'
import { CareerContext } from './CareerContext'
import { GET_ACTIVITIES, GET_CAREERS, GET_COURSES, GET_JOBS, SET_CAREER } from '../Types'

import careers from 'persistences/db/carreras.json'
import images from 'persistences/db/imagenes.json'
import courses from 'persistences/db/cursos.json'
import activities from 'persistences/db/actividades.json'
import jobs from 'persistences/db/trabajos.json'

export const CareerState = (props) => {
  const initialState = {
    careers: [],
    career: {},
    courses: [],
    activities: [],
    jobs: [],
  }

  const [state, dispatch] = useReducer(CareerReducer, initialState)

  const getCareers = async () => {
    console.log(typeof careers)
    const data = careers.map(carrera => {
      return {
        id: carrera.id,
        nombre: carrera.nombre,
        definicion: carrera.definicion,
        ruta: images.find(imagen => imagen.idCarrera === carrera.id).ruta
      }
    })

    dispatch({
      type: GET_CAREERS,
      payload: data,
    })
    //console.log(data)
    return data

  }

  const setCareer = async (id) => {
    const data = await careers.filter(item => item.id === id).map(item => {
      return {
        id: item.id,
        nombre: item.nombre,
        definicion: item.definicion,
        ruta: images.find(imagen => imagen.idCarrera === id).ruta
      }
    })
    //console.log(data)

    dispatch({
      type: SET_CAREER,
      payload: data[0],
    })
  }

  const getCourses = async (id) => {

    const data = await courses.filter(item => item.idCarrera === id)

    //console.log(data)

    dispatch({
      type: GET_COURSES,
      payload: data,
    })
  }

  const getActivities = async (id) => {

    const data = await activities.filter(item => item.idCarrera === id)

    dispatch({
      type: GET_ACTIVITIES,
      payload: data,
    })
  }

  const getJobs = async (id) => {

    const data = await jobs.filter(item => item.idCarrera === id)

    dispatch({
      type: GET_JOBS,
      payload: data,
    })
  }

  return (
    <CareerContext.Provider
      value={{
        careers: state.careers,
        career: state.career,
        courses: state.courses,
        activities: state.activities,
        jobs: state.jobs,
        setCareer,
        getCareers,
        getCourses,
        getActivities,
        getJobs,
      }}
    >
      {props.children}
    </CareerContext.Provider>
  )

}
