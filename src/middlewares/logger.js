/**
 * 打印action 以及action之后的state
 */
const logger = ({ getState, dispatch }) => next => action => {
  console.group(action.type)
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', getState())
  console.groupEnd();
  // 将结果进行返回
  return result
}

export default logger