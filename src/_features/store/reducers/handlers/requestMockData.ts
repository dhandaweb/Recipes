

export function requestMockData(state: any){
    console.log("reducer call");
     return {
    ...state
  };
 
}
export function requestListSuccess(state: any) {
console.log("requestListSuccess",state);
    return {
      ...state,
      
    };
  }
  export function requestListFailed(state: any) {
    return state;
  }
