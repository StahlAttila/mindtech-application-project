import { useReducer, useCallback } from "react";
import CovidData from "../models/covid-data";
import DateFilter from "../models/date-filter";

type HttpState = {
  status: string;
  data: CovidData[] | undefined;
  error: string | undefined;
};

interface ActionSuccess {
  type: string;
  responseData: CovidData[];
  errorMessage?: never;
}

interface ActionError {
  type: string;
  errorMessage: string;
  responseData?: never;
}

interface ActionPending {
  type: string;
  responseData?: never;
  errorMessage?: never;
}

type Action = ActionSuccess | ActionError | ActionPending;

function httpReducer(state: HttpState, action: Action): HttpState {
  if (action.type === "SEND") {
    return {
      data: [],
      error: "",
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: "",
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: [],
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
}

const initState: HttpState = {
  status: "",
  data: [],
  error: "",
};

function useHttp(
  requestFunction: (requestData: DateFilter) => Promise<CovidData[]>
) {
  const [httpState, dispatch] = useReducer(httpReducer, initState);

  const sendRequest = useCallback(
    async function (requestData: DateFilter) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({
          type: "SUCCESS",
          responseData,
        });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: "Could not retrieve data from server!",
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
