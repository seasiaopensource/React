import {
    combineReducers,
  } from "@reduxjs/toolkit";
  import loginReducer from "../components/pages/login/loginSlice";
  import registerReducer from "../components/pages/register/registerSlice";
  import tcoToolReducer from "../components/pages/tco-tool/tcoToolSlice";
  import biddingReducer from "../components/pages/bidding-tool/biddingSlice";
  import listByMarqueReducer from "../components/pages/tco-tool/listByMarqueSlice";
  import compareVehicleReducer from "../components/pages/tco-tool/compareVehicleSlice";
  import optimiseReducer from "../components/pages/optimise/optimiseSlice";
  import comparisionResultsReducer from "../components/pages/comparision-results/comparisionResultsSlice";
  
  const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    tcoTool: tcoToolReducer,
    bidding: biddingReducer,
    listByMarque: listByMarqueReducer,
    compareVehicle: compareVehicleReducer,
    optimise:optimiseReducer,
    comparisionResults:comparisionResultsReducer
  });


  const reducer = (state, action) => {
    return rootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action);
  }

  export default reducer;
  