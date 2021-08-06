function abc(fn)
{
    return (props)=>{
        props+=5;
        fn(props);
    }
}

function fn(props)
{
    console.log(props);
}
function fn2(props)
{
    console.log(props);
}
abc(fn)(5);
abc(fn2)(5)