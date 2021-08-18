const initialState = {
    isVisible : true
}

export const Actions = {
    Types : {
        SHOW_SIDEBAR : 'SHOW_SIDEBAR',
        HANDLE_SIDEBAR : 'HANDLE_SIDEBAR'
    },
    Creators : {
        showSidebar : (payload) => ({
            type : Actions.Types.SHOW_SIDEBAR,
            payload
        }),
        handleSidebar : (data) => ({
            type : Actions.Types.HANDLE_SIDEBAR,
            data
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default : return {
            ...state
        }
        case Actions.Types.HANDLE_SIDEBAR : {
            return  {
                ...state,
                isVisible: action.data
            }
        }

    }
}

export default reducer;