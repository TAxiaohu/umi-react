import { queryCurrentUser } from "@/services/user";

export default {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetchCurrentUser(_, { call, put }) {
      const response = yield call(queryCurrentUser);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, { payload }) {
      return {
        ...state,
        currentUser: { ...payload },
      }
    },
  },
}