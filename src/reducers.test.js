import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';


 import * as reducers from './reducers';

 describe('Search Robots', ()=> {
  const initialState = {
    searchField: ''
  };


  it('Should return initial state', ()=> {
     expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
  })

  it('Should handle CHANGE_SEARCHFIELD', ()=> {
    expect(reducers.searchRobots(initialState, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({ searchField: 'abc'})
  })
 });