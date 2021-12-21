import React, { useReducer, useCallback } from 'react';
import CovidData from '../models/covid-data';
import DateFilter from '../models/date-filter';

type HttpState = {
  status: string | null
  data: CovidData[] | null
  error: string | null
}

type Action ={
  type: string,
  responseData: CovidData[] | null,
  errorMessage: string | null
}

function httpReducer(state: HttpState, action:Action): HttpState {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed',
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed',
    };
  }

  return state;
}

const initState: HttpState= {
  status: null,
  data: null,
  error: null,
}

function useHttp(requestFunction:(requestData: DateFilter) => Promise<CovidData[]>) {
  const [httpState, dispatch] = useReducer(httpReducer, initState );

  const sendRequest = useCallback(
    async function (requestData:DateFilter) {
      dispatch({ type: 'SEND', responseData: null, errorMessage: null });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData, errorMessage: null });
      } catch (error) {
        dispatch({
          type: 'ERROR',
          responseData: null,
          errorMessage: 'Could not retrieve data from server!',
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;