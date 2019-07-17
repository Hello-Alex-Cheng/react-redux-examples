const initialState = {
  past: [],
  present: 0,
  future: []
};

// 记录每一个运算过后的数值到 past
// undo 操作: 记录当前的 present 到 future, 弹出 past 的最后一个值, 并赋值给 present
// redo 操作: 将当前的 present 的值推入 past 中, 将 future 的最后一个值弹出, 并赋值给当前的 present

export function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        past: state.past.concat(state.present),
        present: state.present + 1
      };
    case "DECREMENT":
      return {
        ...state,
        past: state.past.concat(state.present),
        present: state.present - 1
      };
    case "ONUNDO":
      if (state.past.length === 0) return { ...state };
      return {
        ...state,
        future: state.future.concat(state.present),
        present: state.past.pop(),
        past: state.past
      };
    case "ONREDO":
      if (state.future.length === 0) return { ...state };
      return {
        ...state,
        past: state.past.concat(state.present),
        present: state.future.pop(),
        future: state.future
      };
    default:
      return state;
  }
}
