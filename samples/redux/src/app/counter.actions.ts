export function inc(value: number){
  // return {
  //   type: "INC",
  // }

  return function(dispatch) {
    setTimeout(function(){
      dispatch({
        type: "INC",
        value,
      });
    }, 1500);
  }
}
