const initialState = {
    isVisible : true
}

export const Actions = {
    Types : {
        SHOW_MENU : 'SHOW_MENU',
        HANDLE_MENU : 'HANDLE_MENU'
    },
    Creators : {
        showMenu : (payload) => ({
            type : Actions.Types.SHOW_MENU,
            payload
        }),
        handleMenu : (data) => ({
            type : Actions.Types.HANDLE_MENU,
            data
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default : return {
            ...state
        }
        case Actions.Types.HANDLE_MENU : {
            return  {
                ...state,
                isVisible: action.data
            }
        }

    }
}

export default reducer;