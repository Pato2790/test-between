const actions = {
    SHOW_MORE: "SHOW_MORE",
    SHOW_OFFLINE: "SHOW_OFFLINE"
}

const filterReducer = (state: any, action: any) => {
    switch (action.type) {
        case actions.SHOW_MORE:
            return { ...state, showMoreUsers: action.payload }
        case actions.SHOW_OFFLINE:
            return { ...state, showOffline: action.payload }
        default:
            return state
    }
}

export { actions, filterReducer };