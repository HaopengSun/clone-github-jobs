import { useReducer, useEffect } from 'react'
import axios from 'axios'

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR_DATA: 'error'
}

const BASE_URL = 'https://jobs.github.com/positions.json'

function reducer(state, action){
  switch(action.type){
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: action.payload.jobs };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: [] };
    case ACTIONS.ERROR_DATA:
      return { ...state, loading: false, error: action.payload.error, jobs: [] };
    default:
      return state
  }
}

export default function useFetchJobs(params, page){
  const [state, dispatch] = useReducer(reducer, {
    jobs:[],
    loading: true,
    error: false
  })

  useEffect(() => {
    dispatch({ type: ACTION.MAKE_REQUEST })
    axios.get(BASE_URL, {
      params: {markdown: true, page, ...params}
    }).then(res => dispatch({
      type: ACTIONS.GET_DATA, payload: {jobs: res.data}
    }))
  }, [params, page])

  return 
}