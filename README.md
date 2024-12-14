![img_1.png](img_1.png)

! initialState = { count: 0 };

! Reducer - {state, action} switch case
! state is current, action is the updated state
! switch statement to check the action type and returns a new state accordingly

! Counter() ->> const [state, dispatch] = useReducer(reducer, initialState);
! state is current, dispatch is the updated state

!dispatch({ type: 'increment' })
!dispatch({ type: 'decrement' }) 
!dispatch({ type: 'reset' })