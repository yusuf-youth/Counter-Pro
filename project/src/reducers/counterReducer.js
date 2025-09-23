import { COUNTER_ACTIONS } from "../script/constants";

export const initialCount = 0;

export function counterReducer(state, action) {
    switch (action.type) {
        case COUNTER_ACTIONS.INCREMENT:
            return Math.max(0, state + 1);
        case COUNTER_ACTIONS.DECREMENT:
            return Math.max(0, state - 1);
        case COUNTER_ACTIONS.RESET:
            return initialCount;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}