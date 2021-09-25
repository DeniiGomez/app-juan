import React, { useReducer } from 'react'
import CareerReducer from './CareerReducer'
import { CareerContext } from './CareerContext'
import { GET_ACTIVITIES, GET_CAREERS, GET_COURSES, GET_JOBS, SET_CAREER } from '../Types'

import ModelCareer from '../../models/Career'
import CourseModel from '../../models/Course'
import ActivityModel from '../../models/Activities'
import JobModel from '../../models/Jobs'

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
    const data = await ModelCareer.query()
    console.log(data)

    dispatch({
      type: GET_CAREERS,
      payload: data,
    })
  }

  const setCareer = async (id) => {
    const data = await ModelCareer.find(id)
    console.log(data)

    dispatch({
      type: SET_CAREER,
      payload: data,
    })
  }

  const getCourses = async (id) => {

    const data = await CourseModel.customQuery(id)

    console.log(data)

    dispatch({
      type: GET_COURSES,
      payload: data,
    })
  }

  const getActivities = async (id) => {

    const data = await ActivityModel.customQuery(id)

    dispatch({
      type: GET_ACTIVITIES,
      payload: data,
    })
  }

  const getJobs = async (id) => {

    const data = await JobModel.customQuery(id)

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
