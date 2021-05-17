import { HIDE_ALERT, SHOW_ALERT } from 'src/context/types';

const handlers = {
	[SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
[HIDE_ALERT]: state => ({...state, visible: false}),
	DEFAULT: state => state,
};

export const alertReducer = (state, action) => {
	const handle = handlers[action.type] || handlers.DEFAULT;
	return handle(state, action);
};