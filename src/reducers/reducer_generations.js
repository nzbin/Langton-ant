const counter = (state = 0, action) => {
    switch (action.type) {
        case 'NEXT':
            return state + 1;
        case 'CLEAR':
            return 0;
        default:
            return state;
    }
}
export default counter;