import React from 'react';
const styles = {
    default:{
        backgroundColor:'yellow',
        color:'orange',
        padding:'10px',
        margin:'10px'
    },
    disable:{
        backgroundColor:'green',
        color:'red'
    }
}

export default function HOC(WrappedComponent){
    return function wrappedRender(args){
        let _styles = {...styles.default};
        if(args.disable)
        {
            _styles={..._styles,...styles.disable};
        }
        let obj = {...args,styles:_styles}
        return <WrappedComponent {...obj} />
    }

}