import * as actionTypes from './actionTypes';

export const add = (educationSection)=>{
    return {type:actionTypes.ADD_EDUCATION,educationSection:educationSection}

}

export const update = (educationSection)=>{
    return {type:actionTypes.UPDATE_EDUCATION,educationSection:educationSection}
}