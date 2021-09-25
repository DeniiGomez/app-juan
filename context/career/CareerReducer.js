import { GET_CAREERS, GET_DEFINITION, GET_COURSES, GET_ACTIVITIES, GET_JOBS, SET_CAREER } from '../Types'

export default function (state, action) {
  const { payload, type } = action

  switch(type) {
    case GET_CAREERS:
      return {
        ...state,
        careers: payload
      }
    case SET_CAREER:
      return {
        ...state,
        career: payload
      }
    case GET_COURSES: {
      return {
        ...state,
        courses: payload,
      }
    }
    case GET_ACTIVITIES: {
      return {
        ...state,
        activities: payload,
      }
    }
    case GET_JOBS: {
      return {
        ...state,
        jobs: payload,
      }
    }
    default: {
      return state
    }
  }
}
